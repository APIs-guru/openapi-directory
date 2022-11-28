package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type API struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAPI(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *API {
	return &API{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CreateAPI - Create API
// This call creates a new API with a default API Version.
//
// Request body should contain an `api` object which should atleast have a property `name`.
//
// Response contains an `api` object with all the details related to the created API, namely, `id`, `name`, `summary`, `description`, etc.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *API) CreateAPI(ctx context.Context, request operations.CreateAPIRequest) (*operations.CreateAPIResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/apis"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateAPIResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.CreateAPI200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateAPI200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// CreateAPIVersion - Create API Version
// This call creates a new API version in the specified API.
//
// Request body should contain a `version` object which should have fields:
//
// <table>
// <tr>
//
//	<td>name</td>
//	<td>Required. Name of the API Version</td>
//
// </tr>
// <tr>
//
//	<td>source</td>
//	<td>
//		If specified, it will copy the contents of the specified api version to create a new api verison.
//		<table>
//			<tr>
//				<td>id</td>
//				<td>Required. Id of the apiversion from where the details are to be copied</td>
//			</tr>
//			<tr>
//				<td>schema</td>
//				<td>Boolean. If true then copies the schema from the specified api version</td>
//			</tr>
//			<tr>
//				<td>relations</td>
//				<td>Object. {"&lt;relationType&gt;": true/false}.
//					Allowed relation types are `mock`, `monitor`, `documentation`, `contracttest`, `integrationtest`, `testsuite`, `environment`
//				Relation types which should be copied over to the new api verison</td>
//			</tr>
//		</table>
//	</td>
//
// </tr>
// </table>
//
// Response contains a `version` object with all the details related to the created API Version, namely, `id`, `name`, `api`.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *API) CreateAPIVersion(ctx context.Context, request operations.CreateAPIVersionRequest) (*operations.CreateAPIVersionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/apis/{apiId}/versions", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateAPIVersionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.CreateAPIVersion200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateAPIVersion200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// CreateCollectionFromSchema - Create collection from schema
// This call creates a collection and links it to an API as one or multiple relations.
//
// Request body requires two keys:
// - `name` - Name of the collection to be created.
// - `relations` - A list of relation(s) to be created.
//
// The allowed relation types are `contracttest`, `integrationtest`, `testsuite`, and `documentation`.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *API) CreateCollectionFromSchema(ctx context.Context, request operations.CreateCollectionFromSchemaRequest) (*operations.CreateCollectionFromSchemaResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}/collections", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateCollectionFromSchemaResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.CreateCollectionFromSchema200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateCollectionFromSchema200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// CreateRelations - Create relations
// This call allows you to add existing Postman entities as new relations to an API. The request body should contain the relations to be created along with an array of entity IDs.
//
// <table>
//
//	<tr>
//	  <th>Relation</th>
//	  <th>Entity ID type</th>
//	<tr>
//	<tr>
//	  <td>contracttest</td>
//	  <td>Collection UIDs</td>
//	</tr>
//	<tr>
//	  <td>integrationtest</td>
//	  <td>Collection UIDs</td>
//	</tr>
//	<tr>
//	  <td>documentation</td>
//	  <td>Collection UIDs</td>
//	</tr>
//	<tr>
//	  <td>testsuite</td>
//	  <td>Collection UIDs</td>
//	</tr>
//	<tr>
//	  <td>environment</td>
//	  <td>Environment UIDs</td>
//	</tr>
//	<tr>
//	  <td>mock</td>
//	  <td>Mock IDs</td>
//	</tr>
//	<tr>
//	  <td>monitor</td>
//	  <td>Monitor IDs</td>
//	</tr>
//
// </table>
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *API) CreateRelations(ctx context.Context, request operations.CreateRelationsRequest) (*operations.CreateRelationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/apis/{apiId}/versions/{apiVersionId}/relations", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateRelationsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.CreateRelations200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateRelations200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// CreateSchema - Create Schema
// This call creates a new schema.
//
// Request body should contain a `schema` object which should atleast have these properties with `string` values:
//
// - **`type`**: Allowed types are `openapi3`, `openapi2`, `openapi1`, `raml` and `graphql`.
// - **`language`** : Allowed languages are `json` and `yaml` for OpenAPI and RAML schema types. GraphQL schema type accepts only `graphql` language.
// - **`schema`**: Optional. If passed, must be the content of the schema as a `string`.
//
// Response contains a `schema` object with all the details related to the created schema, namely, `id`, `language`, `type` etc.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *API) CreateSchema(ctx context.Context, request operations.CreateSchemaRequest) (*operations.CreateSchemaResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/apis/{apiId}/versions/{apiVersionId}/schemas", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateSchemaResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.CreateSchema200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateSchema200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// DeleteAnAPI - Delete an API
// This call deletes an existing API having the specified id.
//
// Response contains an `api` object with `id` of the API which was deleted.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *API) DeleteAnAPI(ctx context.Context, request operations.DeleteAnAPIRequest) (*operations.DeleteAnAPIResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/apis/{apiId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteAnAPIResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DeleteAnAPI200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DeleteAnAPI200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// DeleteAnAPIVersion - Delete an API Version
// This call deletes an existing API Version having the specified id.
//
// Response contains an `version` object with `id` of the API Version which was deleted.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *API) DeleteAnAPIVersion(ctx context.Context, request operations.DeleteAnAPIVersionRequest) (*operations.DeleteAnAPIVersionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/apis/{apiId}/versions/{apiVersionId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteAnAPIVersionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DeleteAnAPIVersion200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DeleteAnAPIVersion200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetAllApIs - Get all APIs
// This call fetches all the APIs present in the specified workspace
//
// Response contains an array named `apis` which would contain all the details of APIs present in the workspace.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *API) GetAllApIs(ctx context.Context, request operations.GetAllApIsRequest) (*operations.GetAllApIsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/apis"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAllApIsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetAllAPIVersions - Get All API Versions
// This call fetches details about the all the API Versions in the specified API.
//
// The response will contain an array `versions` object which would be a list of all the API Version along with their details.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *API) GetAllAPIVersions(ctx context.Context, request operations.GetAllAPIVersionsRequest) (*operations.GetAllAPIVersionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/apis/{apiId}/versions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAllAPIVersionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetAllAPIVersions200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetAllAPIVersions200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetAnAPIVersion - Get an API Version
// This call fetches details about the specified API Version.
//
// The response will contain a `version` object which would contain all the details of the API Version.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *API) GetAnAPIVersion(ctx context.Context, request operations.GetAnAPIVersionRequest) (*operations.GetAnAPIVersionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/apis/{apiId}/versions/{apiVersionId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAnAPIVersionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetAnAPIVersion200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetAnAPIVersion200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetContractTestRelations - Get contract test relations
// This call fetches all the relations by type which are linked to the specified API version along with their details.
//
// The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *API) GetContractTestRelations(ctx context.Context, request operations.GetContractTestRelationsRequest) (*operations.GetContractTestRelationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/apis/{apiId}/versions/{apiVersionId}/contracttest", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetContractTestRelationsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetContractTestRelations200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetContractTestRelations200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetDocumentationRelations - Get  documentation relations
// This call fetches all the relations by type which are linked to the specified API version along with their details.
//
// The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *API) GetDocumentationRelations(ctx context.Context, request operations.GetDocumentationRelationsRequest) (*operations.GetDocumentationRelationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/apis/{apiId}/versions/{apiVersionId}/documentation", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDocumentationRelationsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetDocumentationRelations200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetDocumentationRelations200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetEnvironmentRelations - Get environment relations
// This call fetches all the relations by type which are linked to the specified API version along with their details.
//
// The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *API) GetEnvironmentRelations(ctx context.Context, request operations.GetEnvironmentRelationsRequest) (*operations.GetEnvironmentRelationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/apis/{apiId}/versions/{apiVersionId}/environment", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetEnvironmentRelationsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetEnvironmentRelations200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetEnvironmentRelations200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetIntegrationTestRelations - Get integration test relations
// This call fetches all the relations by type which are linked to the specified API version along with their details.
//
// The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *API) GetIntegrationTestRelations(ctx context.Context, request operations.GetIntegrationTestRelationsRequest) (*operations.GetIntegrationTestRelationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/apis/{apiId}/versions/{apiVersionId}/integrationtest", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetIntegrationTestRelationsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetIntegrationTestRelations200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetIntegrationTestRelations200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetLinkedRelations - Get linked relations
// This call fetches all the relations which are linked to the specified API version along with their details.
//
// The response will contain a `relations` object which lists all the relation types which are linked to the API version. Each of the relation type will be an object which details the relations of this type.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *API) GetLinkedRelations(ctx context.Context, request operations.GetLinkedRelationsRequest) (*operations.GetLinkedRelationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/apis/{apiId}/versions/{apiVersionId}/relations", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetLinkedRelationsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetLinkedRelations200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetLinkedRelations200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetMonitorRelations - Get monitor relations
// This call fetches all the relations by type which are linked to the specified API version along with their details.
//
// The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *API) GetMonitorRelations(ctx context.Context, request operations.GetMonitorRelationsRequest) (*operations.GetMonitorRelationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/apis/{apiId}/versions/{apiVersionId}/monitor", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMonitorRelationsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetMonitorRelations200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetMonitorRelations200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetSchema - Get Schema
// This call fetches a single schema having the specified id.
//
// Response contains a `schema` object with all the details related to the schema, namely, `id`, `language`, `type`, `schema` etc.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *API) GetSchema(ctx context.Context, request operations.GetSchemaRequest) (*operations.GetSchemaResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSchemaResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetSchema200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetSchema200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetTestSuiteRelations - Get test suite relations
// This call fetches all the relations by type which are linked to the specified API version along with their details.
//
// The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *API) GetTestSuiteRelations(ctx context.Context, request operations.GetTestSuiteRelationsRequest) (*operations.GetTestSuiteRelationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/apis/{apiId}/versions/{apiVersionId}/testsuite", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTestSuiteRelationsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetTestSuiteRelations200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetTestSuiteRelations200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// SingleAPI - Single API
// This call fetches a single API having the specified id.
//
// Response contains an `api` object with all the details related to the queried API, namely, `id`, `name`, `summary`, `description` etc.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *API) SingleAPI(ctx context.Context, request operations.SingleAPIRequest) (*operations.SingleAPIResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/apis/{apiId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SingleAPIResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.SingleAPI200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SingleAPI200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// SyncRelationsWithSchema - Sync relations with schema
// This call allows you to keep the relation in sync with the API schema.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *API) SyncRelationsWithSchema(ctx context.Context, request operations.SyncRelationsWithSchemaRequest) (*operations.SyncRelationsWithSchemaResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/apis/{apiId}/versions/{apiVersionId}/{entityType}/{entityId}/syncWithSchema", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SyncRelationsWithSchemaResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.SyncRelationsWithSchema200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SyncRelationsWithSchema200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.SyncRelationsWithSchema400ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SyncRelationsWithSchema400ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateAnAPI - Update an API
// This call updates an existing API .
//
// Request body should contain an `api` object which should have the fields to be updated. Only `name`, `summary` and `description` fields can be edited for an API.
//
// Response contains an `api` object with all the details related to the created API, namely, `id`, `name`, `summary`, `description` etc.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *API) UpdateAnAPI(ctx context.Context, request operations.UpdateAnAPIRequest) (*operations.UpdateAnAPIResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/apis/{apiId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateAnAPIResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.UpdateAnAPI200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UpdateAnAPI200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateAnAPIVersion - Update an API Version
// This call updates an existing API Version.
//
// Request body should contain a `version` object with the fields which need to be updated. Only field which can be updated is `name`.
//
// Response contains a `version` object with all the details related to the created API Version, namely, `id`, `name`, `api` etc.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *API) UpdateAnAPIVersion(ctx context.Context, request operations.UpdateAnAPIVersionRequest) (*operations.UpdateAnAPIVersionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/apis/{apiId}/versions/{apiVersionId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateAnAPIVersionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.UpdateAnAPIVersion200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UpdateAnAPIVersion200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateSchema - Update Schema
// This call updates an existing schema.
//
// Request body should contain a `schema` object which should atleast have these properties with `string` values:
//
// - **`type`**: Allowed types are `openapi3`, `openapi2`, `openapi1`, `raml` and `graphql`.
// - **`language`** : Allowed languages are `json` and `yaml` for OpenAPI and RAML schema types. GraphQL schema type accepts only `graphql` language.
// - **`schema`**: Optional. If passed, must be the content of the schema as a `string`.
//
// Response contains a `schema` object with all the details related to the created schema, namely, `id`, `language`, `type` etc.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *API) UpdateSchema(ctx context.Context, request operations.UpdateSchemaRequest) (*operations.UpdateSchemaResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateSchemaResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.UpdateSchema200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UpdateSchema200ApplicationJSONObject = out
		}
	}

	return res, nil
}
