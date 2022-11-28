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

type Song struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewSong(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Song {
	return &Song{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// SrcSearchlyAPIV1ControllersSongSearch - API endpoint to search songs from the database given a query
// Endpoint for an end-user client to search songs from the database given a String query.
//
// If you want to run the /song/search operation, you can do so via an HTTP GET command to the following URL:
//
// ```
// https://searchly.asuarez.dev/api/v1/song/search
// ```
func (s *Song) SrcSearchlyAPIV1ControllersSongSearch(ctx context.Context, request operations.SrcSearchlyAPIV1ControllersSongSearchRequest) (*operations.SrcSearchlyAPIV1ControllersSongSearchResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/song/search"

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

	res := &operations.SrcSearchlyAPIV1ControllersSongSearchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APIResponseSong
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIResponseSong = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `application/text`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.SrcSearchlyAPIV1ControllersSongSearchDefaultApplicationTextString = &out
		}
	}

	return res, nil
}
