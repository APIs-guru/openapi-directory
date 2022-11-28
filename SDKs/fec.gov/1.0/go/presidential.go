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

type Presidential struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewPresidential(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Presidential {
	return &Presidential{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetPresidentialContributionsByCandidate -
// Net receipts per candidate.
//
// Filter with `contributor_state='US'` for national totals
func (s *Presidential) GetPresidentialContributionsByCandidate(ctx context.Context, request operations.GetPresidentialContributionsByCandidateRequest) (*operations.GetPresidentialContributionsByCandidateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/presidential/contributions/by_candidate/"

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

	res := &operations.GetPresidentialContributionsByCandidateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PresidentialByCandidatePage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PresidentialByCandidatePage = out
		}
	}

	return res, nil
}

// GetPresidentialContributionsBySize -
// Contribution receipts by size per candidate.
//
// Filter by candidate_id, election_year and/or size
func (s *Presidential) GetPresidentialContributionsBySize(ctx context.Context, request operations.GetPresidentialContributionsBySizeRequest) (*operations.GetPresidentialContributionsBySizeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/presidential/contributions/by_size/"

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

	res := &operations.GetPresidentialContributionsBySizeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PresidentialBySizePage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PresidentialBySizePage = out
		}
	}

	return res, nil
}

// GetPresidentialContributionsByState -
// Contribution receipts by state per candidate.
//
// Filter by candidate_id and/or election_year
func (s *Presidential) GetPresidentialContributionsByState(ctx context.Context, request operations.GetPresidentialContributionsByStateRequest) (*operations.GetPresidentialContributionsByStateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/presidential/contributions/by_state/"

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

	res := &operations.GetPresidentialContributionsByStateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PresidentialByStatePage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PresidentialByStatePage = out
		}
	}

	return res, nil
}

// GetPresidentialCoverageEndDate -
// Coverage end date per candidate.
//
// Filter by candidate_id and/or election_year
func (s *Presidential) GetPresidentialCoverageEndDate(ctx context.Context, request operations.GetPresidentialCoverageEndDateRequest) (*operations.GetPresidentialCoverageEndDateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/presidential/coverage_end_date/"

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

	res := &operations.GetPresidentialCoverageEndDateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PresidentialCoveragePage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PresidentialCoveragePage = out
		}
	}

	return res, nil
}

// GetPresidentialFinancialSummary -
// Financial summary per candidate.
//
// Filter by candidate_id and/or election_year
func (s *Presidential) GetPresidentialFinancialSummary(ctx context.Context, request operations.GetPresidentialFinancialSummaryRequest) (*operations.GetPresidentialFinancialSummaryResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/presidential/financial_summary/"

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

	res := &operations.GetPresidentialFinancialSummaryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PresidentialSummaryPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PresidentialSummaryPage = out
		}
	}

	return res, nil
}
