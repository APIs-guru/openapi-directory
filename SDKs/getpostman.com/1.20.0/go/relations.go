package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type Relations struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewRelations(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Relations {
	return &Relations{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
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
func (s *Relations) CreateRelations(ctx context.Context, request operations.CreateRelationsRequest) (*operations.CreateRelationsResponse, error) {
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

// GetContractTestRelations - Get contract test relations
// This call fetches all the relations by type which are linked to the specified API version along with their details.
//
// The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *Relations) GetContractTestRelations(ctx context.Context, request operations.GetContractTestRelationsRequest) (*operations.GetContractTestRelationsResponse, error) {
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
func (s *Relations) GetDocumentationRelations(ctx context.Context, request operations.GetDocumentationRelationsRequest) (*operations.GetDocumentationRelationsResponse, error) {
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
func (s *Relations) GetEnvironmentRelations(ctx context.Context, request operations.GetEnvironmentRelationsRequest) (*operations.GetEnvironmentRelationsResponse, error) {
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
func (s *Relations) GetIntegrationTestRelations(ctx context.Context, request operations.GetIntegrationTestRelationsRequest) (*operations.GetIntegrationTestRelationsResponse, error) {
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
func (s *Relations) GetLinkedRelations(ctx context.Context, request operations.GetLinkedRelationsRequest) (*operations.GetLinkedRelationsResponse, error) {
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
func (s *Relations) GetMonitorRelations(ctx context.Context, request operations.GetMonitorRelationsRequest) (*operations.GetMonitorRelationsResponse, error) {
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

// GetTestSuiteRelations - Get test suite relations
// This call fetches all the relations by type which are linked to the specified API version along with their details.
//
// The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *Relations) GetTestSuiteRelations(ctx context.Context, request operations.GetTestSuiteRelationsRequest) (*operations.GetTestSuiteRelationsResponse, error) {
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

// SyncRelationsWithSchema - Sync relations with schema
// This call allows you to keep the relation in sync with the API schema.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *Relations) SyncRelationsWithSchema(ctx context.Context, request operations.SyncRelationsWithSchemaRequest) (*operations.SyncRelationsWithSchemaResponse, error) {
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
