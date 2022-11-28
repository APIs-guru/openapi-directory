package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type Import struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewImport(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Import {
	return &Import{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ImportExportedData - Import exported data
// This endpoint allows you to import your exported Postman data.
// For more information about how you can export your data, refer <a href="https://go.postman.co/me/export">Export your Postman data.</a>
//
// On successful imports, the response will be an array with Each element contaning `id`, `name` and `uid` of entities created.
//
// **Note**: Refer to examples for different scenarios.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header.
func (s *Import) ImportExportedData(ctx context.Context, request operations.ImportExportedDataRequest) (*operations.ImportExportedDataResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/import/exported"

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

	res := &operations.ImportExportedDataResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ImportExportedData200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ImportExportedData200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ImportExportedData400ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ImportExportedData400ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ImportExternalAPISpecification - Import external API specification
// This endpoint allows you to import external API specifications into Postman.
//
// Currently, this endpoint only supports the <a href="https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md">OpenAPI</a> specification, for which the `importType` will be `openapi`.
//
// On a successful import, the response will be an array with each element contaning `id`, `name` and `uid` of entities created.
//
// Supported `type`s:
//
// - string
// - json
// - file
//
// The `input` parameter should be defined based on the `type`.
//
// > To import a file, request body must be form-data with `type` param set to `file`.
//
// **Note**: Refer to examples for different scenarios.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header.
func (s *Import) ImportExternalAPISpecification(ctx context.Context, request operations.ImportExternalAPISpecificationRequest) (*operations.ImportExternalAPISpecificationResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/import/openapi"

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

	res := &operations.ImportExternalAPISpecificationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ImportExternalAPISpecification200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ImportExternalAPISpecification200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ImportExternalAPISpecification400ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ImportExternalAPISpecification400ApplicationJSONObject = out
		}
	}

	return res, nil
}
