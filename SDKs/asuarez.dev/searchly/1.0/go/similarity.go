package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

type Similarity struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewSimilarity(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Similarity {
	return &Similarity{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// SrcSearchlyAPIV1ControllersSimilarityByContent - API endpoint to search similarity using content
// Endpoint for an end-user client to search similarity by content.
//
// If you want to run the /similarity/by_content operation, you can do so via an HTTP POST command to the following URL:
//
// ```
// https://searchly.asuarez.dev/api/v1/similarity/by_content
// ```
func (s *Similarity) SrcSearchlyAPIV1ControllersSimilarityByContent(ctx context.Context, request operations.SrcSearchlyAPIV1ControllersSimilarityByContentRequest) (*operations.SrcSearchlyAPIV1ControllersSimilarityByContentResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/similarity/by_content"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.SrcSearchlyAPIV1ControllersSimilarityByContentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APIResponseSimilarity
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIResponseSimilarity = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `application/text`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.SrcSearchlyAPIV1ControllersSimilarityByContentDefaultApplicationTextString = &out
		}
	}

	return res, nil
}

// SrcSearchlyAPIV1ControllersSimilarityBySong - API endpoint to search similarity using a song identifier
// Endpoint for an end-user client to search similarity by song identifier.
//
// If you want to run the /similarity/by_song operation, you can do so via an HTTP GET command to the following URL:
//
// ```
// https://searchly.asuarez.dev/api/v1/similarity/by_song
// ```
func (s *Similarity) SrcSearchlyAPIV1ControllersSimilarityBySong(ctx context.Context, request operations.SrcSearchlyAPIV1ControllersSimilarityBySongRequest) (*operations.SrcSearchlyAPIV1ControllersSimilarityBySongResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/similarity/by_song"

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

	res := &operations.SrcSearchlyAPIV1ControllersSimilarityBySongResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APIResponseSimilarity
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIResponseSimilarity = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `application/text`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.SrcSearchlyAPIV1ControllersSimilarityBySongDefaultApplicationTextString = &out
		}
	}

	return res, nil
}
