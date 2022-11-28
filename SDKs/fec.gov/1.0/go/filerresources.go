package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

type FilerResources struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewFilerResources(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *FilerResources {
	return &FilerResources{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetRadAnalyst -
// Use this endpoint to look up the RAD Analyst for a committee.
//
// The mission of the Reports Analysis Division (RAD) is to ensure that
// campaigns and political committees file timely and accurate reports that fully disclose
// their financial activities.  RAD is responsible for reviewing statements and financial
// reports filed by political committees participating in federal elections, providing
// assistance and guidance to the committees to properly file their reports, and for taking
// appropriate action to ensure compliance with the Federal Election Campaign Act (FECA).
func (s *FilerResources) GetRadAnalyst(ctx context.Context, request operations.GetRadAnalystRequest) (*operations.GetRadAnalystResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/rad-analyst/"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRadAnalystResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RadAnalystPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RadAnalystPage = out
		}
	}

	return res, nil
}

// GetStateElectionOffice -
// State laws and procedures govern elections for state or local offices as well as
// how candidates appear on election ballots.
// Contact the appropriate state election office for more information.
func (s *FilerResources) GetStateElectionOffice(ctx context.Context, request operations.GetStateElectionOfficeRequest) (*operations.GetStateElectionOfficeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/state-election-office/"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetStateElectionOfficeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.StateElectionOfficeInfoPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.StateElectionOfficeInfoPage = out
		}
	}

	return res, nil
}
