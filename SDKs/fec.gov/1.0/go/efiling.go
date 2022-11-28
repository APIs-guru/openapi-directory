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

type Efiling struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewEfiling(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Efiling {
	return &Efiling{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetEfileFilings - Basic information about electronic files coming into the FEC, posted as they are received.
func (s *Efiling) GetEfileFilings(ctx context.Context, request operations.GetEfileFilingsRequest) (*operations.GetEfileFilingsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/efile/filings/"

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

	res := &operations.GetEfileFilingsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EFilingsPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EFilingsPage = out
		}
	}

	return res, nil
}

// GetEfileReportsHouseSenate -
// Key financial data reported periodically by committees as they are reported. This feed includes summary
// information from the the House F3 reports, the presidential F3p reports and the PAC and party
// F3x reports.
//
// Generally, committees file reports on a quarterly or monthly basis, but
// some must also submit a report 12 days before primary elections. Therefore, during the primary
// season, the period covered by this file may be different for different committees. These totals
// also incorporate any changes made by committees, if any report covering the period is amended.
//
// DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
// label these fields while conveying clear meaning to ensure accessibility for all users.
func (s *Efiling) GetEfileReportsHouseSenate(ctx context.Context, request operations.GetEfileReportsHouseSenateRequest) (*operations.GetEfileReportsHouseSenateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/efile/reports/house-senate/"

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

	res := &operations.GetEfileReportsHouseSenateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BaseF3FilingPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BaseF3FilingPage = out
		}
	}

	return res, nil
}

// GetEfileReportsPacParty -
// Key financial data reported periodically by committees as they are reported. This feed includes summary
// information from the the House F3 reports, the presidential F3p reports and the PAC and party
// F3x reports.
//
// Generally, committees file reports on a quarterly or monthly basis, but
// some must also submit a report 12 days before primary elections. Therefore, during the primary
// season, the period covered by this file may be different for different committees. These totals
// also incorporate any changes made by committees, if any report covering the period is amended.
//
// DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
// label these fields while conveying clear meaning to ensure accessibility for all users.
func (s *Efiling) GetEfileReportsPacParty(ctx context.Context, request operations.GetEfileReportsPacPartyRequest) (*operations.GetEfileReportsPacPartyResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/efile/reports/pac-party/"

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

	res := &operations.GetEfileReportsPacPartyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BaseF3XFilingPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BaseF3XFilingPage = out
		}
	}

	return res, nil
}

// GetEfileReportsPresidential -
// Key financial data reported periodically by committees as they are reported. This feed includes summary
// information from the the House F3 reports, the presidential F3p reports and the PAC and party
// F3x reports.
//
// Generally, committees file reports on a quarterly or monthly basis, but
// some must also submit a report 12 days before primary elections. Therefore, during the primary
// season, the period covered by this file may be different for different committees. These totals
// also incorporate any changes made by committees, if any report covering the period is amended.
//
// DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
// label these fields while conveying clear meaning to ensure accessibility for all users.
func (s *Efiling) GetEfileReportsPresidential(ctx context.Context, request operations.GetEfileReportsPresidentialRequest) (*operations.GetEfileReportsPresidentialResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/efile/reports/presidential/"

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

	res := &operations.GetEfileReportsPresidentialResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BaseF3PFilingPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BaseF3PFilingPage = out
		}
	}

	return res, nil
}
