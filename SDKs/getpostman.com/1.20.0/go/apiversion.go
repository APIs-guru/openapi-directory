package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type APIVersion struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAPIVersion(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *APIVersion {
	return &APIVersion{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
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
func (s *APIVersion) CreateAPIVersion(ctx context.Context, request operations.CreateAPIVersionRequest) (*operations.CreateAPIVersionResponse, error) {
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

// DeleteAnAPIVersion - Delete an API Version
// This call deletes an existing API Version having the specified id.
//
// Response contains an `version` object with `id` of the API Version which was deleted.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *APIVersion) DeleteAnAPIVersion(ctx context.Context, request operations.DeleteAnAPIVersionRequest) (*operations.DeleteAnAPIVersionResponse, error) {
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

// GetAllAPIVersions - Get All API Versions
// This call fetches details about the all the API Versions in the specified API.
//
// The response will contain an array `versions` object which would be a list of all the API Version along with their details.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *APIVersion) GetAllAPIVersions(ctx context.Context, request operations.GetAllAPIVersionsRequest) (*operations.GetAllAPIVersionsResponse, error) {
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
func (s *APIVersion) GetAnAPIVersion(ctx context.Context, request operations.GetAnAPIVersionRequest) (*operations.GetAnAPIVersionResponse, error) {
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

// UpdateAnAPIVersion - Update an API Version
// This call updates an existing API Version.
//
// Request body should contain a `version` object with the fields which need to be updated. Only field which can be updated is `name`.
//
// Response contains a `version` object with all the details related to the created API Version, namely, `id`, `name`, `api` etc.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *APIVersion) UpdateAnAPIVersion(ctx context.Context, request operations.UpdateAnAPIVersionRequest) (*operations.UpdateAnAPIVersionResponse, error) {
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
