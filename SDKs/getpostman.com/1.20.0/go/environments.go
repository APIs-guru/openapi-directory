package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type Environments struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewEnvironments(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Environments {
	return &Environments{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// AllEnvironments - All Environments
// The `/environments` endpoint returns a list of all [environments](https://www.getpostman.com/docs/environments) that belong to you..
//
// The response contains an array of environments' information containing the `name`, `id`, `owner` and `uid` of each environment.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *Environments) AllEnvironments(ctx context.Context) (*operations.AllEnvironmentsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/environments"

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

	res := &operations.AllEnvironmentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.AllEnvironments200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AllEnvironments200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// CreateEnvironment - Create Environment
// A sample body is added to the request that conforms to the following JSON schema:
//
// ```json
//
//	{
//	  "type": "object",
//	  "properties": {
//	    "environment": {
//	      "type": "object",
//	      "properties": {
//	        "name": {
//	              "type": "string",
//	              "maxLength": 254,
//	              "minLength": 1
//	            },
//	        "values": {
//	          "type": "array",
//	          "maxItems": 100,
//	          "additionalItems": false,
//	          "items": {
//	              "type": "object",
//	              "properties": {
//	                "key": {
//	                  "type": "string",
//	                  "maxLength": 254
//	                  "minLength": 1
//	                },
//	                "value": { "type": "string" },
//	                "enabled": { "type": "boolean" }
//	              },
//	              "required": ["key", "value"]
//	            }
//	        }
//	      },
//	      "required": ["name"]
//	    }
//	  },
//	  "required": ["environment"]
//	}
//
// ```
//
// On successful creation of the environment, the API returns the environment name and `id`.
//
// You can also specify the context of a workspace to create an environment in directly by passing the `workspace` as a query param.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *Environments) CreateEnvironment(ctx context.Context, request operations.CreateEnvironmentRequest) (*operations.CreateEnvironmentResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/environments"

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

	res := &operations.CreateEnvironmentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.CreateEnvironment200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateEnvironment200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.CreateEnvironment400ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateEnvironment400ApplicationJSONObject = out
		}
	}

	return res, nil
}

// DeleteEnvironment - Delete Environment
// This endpoint allows you to delete a single environment based on an environment's unique `uid`.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *Environments) DeleteEnvironment(ctx context.Context, request operations.DeleteEnvironmentRequest) (*operations.DeleteEnvironmentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/environments/{environment_uid}", request.PathParams)

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

	res := &operations.DeleteEnvironmentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DeleteEnvironment200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DeleteEnvironment200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DeleteEnvironment404ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DeleteEnvironment404ApplicationJSONObject = out
		}
	}

	return res, nil
}

// SingleEnvironment - Single Environment
// Access the contents of an environment that is accessible to you using its unique id (`uid`).
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *Environments) SingleEnvironment(ctx context.Context, request operations.SingleEnvironmentRequest) (*operations.SingleEnvironmentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/environments/{environment_uid}", request.PathParams)

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

	res := &operations.SingleEnvironmentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.SingleEnvironment200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SingleEnvironment200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateEnvironment - Update Environment
// This endpoint replaces an existing environment.
//
// A sample body is added to the request that conforms to the following JSON schema:
//
// ```json
//
//	{
//		"type": "object",
//		"properties": {
//			"environment": {
//				"type": "object",
//				"properties": {
//					"name": {
//						"type": "string",
//						"maxLength": 254,
//						"minLength": 1
//					},
//					"values": {
//						"type": "array",
//						"maxItems": 100,
//						"additionalItems": false,
//						"items": {
//							"type": "object",
//							"properties": {
//								"key": {
//									"type": "string",
//									"maxLength": 254,
//									"minLength": 1
//								},
//								"value": {
//									"type": "string",
//									"maxLength": 254,
//									"minLength": 1
//								},
//								"type": {
//									"type": "string"
//								},
//								"enabled": {
//									"type": "boolean"
//								}
//							},
//							"required": [
//								"key",
//								"value"
//							]
//						}
//					}
//				}
//			}
//		},
//		"required": [
//			"environment"
//		]
//	}
//
// ```
//
// On successful updation of the environment, the API returns the environment name and `id`.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *Environments) UpdateEnvironment(ctx context.Context, request operations.UpdateEnvironmentRequest) (*operations.UpdateEnvironmentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/environments/{environment_uid}", request.PathParams)

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

	res := &operations.UpdateEnvironmentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.UpdateEnvironment200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UpdateEnvironment200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.UpdateEnvironment400ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UpdateEnvironment400ApplicationJSONObject = out
		}
	}

	return res, nil
}
