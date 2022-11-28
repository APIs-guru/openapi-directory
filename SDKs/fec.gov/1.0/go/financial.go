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

type Financial struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewFinancial(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Financial {
	return &Financial{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetCommitteeCommitteeIDReports -
// Each report represents the summary information from Form 3, Form 3X and Form 3P.
// These reports have key statistics that illuminate the financial status of a given committee.
// Things like cash on hand, debts owed by committee, total receipts, and total disbursements
// are especially helpful for understanding a committee's financial dealings.
//
// By default, this endpoint includes both amended and final versions of each report. To restrict
// to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
// have been amended, use `is_amended=true`.
//
// Several different reporting structures exist, depending on the type of organization that
// submits financial information. To see an example of these reporting requirements,
// look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.
//
// DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
// label these fields while conveying clear meaning to ensure accessibility for all users.
func (s *Financial) GetCommitteeCommitteeIDReports(ctx context.Context, request operations.GetCommitteeCommitteeIDReportsRequest) (*operations.GetCommitteeCommitteeIDReportsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/committee/{committee_id}/reports/", request.PathParams)

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

	res := &operations.GetCommitteeCommitteeIDReportsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CommitteeReportsPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommitteeReportsPage = out
		}
	}

	return res, nil
}

// GetCommitteeCommitteeIDTotals -
// This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
// which are aggregated by two-year period. We refer to two-year periods as a `cycle`.
//
// The cycle is named after the even-numbered year and includes the year before it. To obtain
// totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
// is the next year — for example, in 2015, the current cycle is 2016.
//
// For presidential and Senate candidates, multiple two-year cycles exist between elections.
func (s *Financial) GetCommitteeCommitteeIDTotals(ctx context.Context, request operations.GetCommitteeCommitteeIDTotalsRequest) (*operations.GetCommitteeCommitteeIDTotalsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/committee/{committee_id}/totals/", request.PathParams)

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

	res := &operations.GetCommitteeCommitteeIDTotalsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CommitteeTotalsPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommitteeTotalsPage = out
		}
	}

	return res, nil
}

// GetElections -
// Look at the top-level financial information for all candidates running for the same
// office.
//
// Choose a 2-year cycle, and `house`, `senate` or `presidential`.
//
// If you are looking for a Senate seat, you will need to select the state using a two-letter
// abbreviation.
//
// House races require state and a two-digit district number.
//
// Since this endpoint reflects financial information, it will only have candidates once they file
// financial reporting forms. Query the `/candidates` endpoint to retrieve an-up-to-date list of all the
// candidates that filed to run for a particular seat.
func (s *Financial) GetElections(ctx context.Context, request operations.GetElectionsRequest) (*operations.GetElectionsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/elections/"

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

	res := &operations.GetElectionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ElectionPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ElectionPage = out
		}
	}

	return res, nil
}

// GetElectionsSearch -
// List elections by cycle, office, state, and district.
func (s *Financial) GetElectionsSearch(ctx context.Context, request operations.GetElectionsSearchRequest) (*operations.GetElectionsSearchResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/elections/search/"

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

	res := &operations.GetElectionsSearchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ElectionsListPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ElectionsListPage = out
		}
	}

	return res, nil
}

// GetElectionsSummary -
// List elections by cycle, office, state, and district.
func (s *Financial) GetElectionsSummary(ctx context.Context, request operations.GetElectionsSummaryRequest) (*operations.GetElectionsSummaryResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/elections/summary/"

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

	res := &operations.GetElectionsSummaryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ElectionSummary
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ElectionSummary = out
		}
	}

	return res, nil
}

// GetReportsEntityType -
// Each report represents the summary information from Form 3, Form 3X and Form 3P.
// These reports have key statistics that illuminate the financial status of a given committee.
// Things like cash on hand, debts owed by committee, total receipts, and total disbursements
// are especially helpful for understanding a committee's financial dealings.
//
// By default, this endpoint includes both amended and final versions of each report. To restrict
// to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
// have been amended, use `is_amended=true`.
//
// Several different reporting structures exist, depending on the type of organization that
// submits financial information. To see an example of these reporting requirements,
// look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.
//
// DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
// label these fields while conveying clear meaning to ensure accessibility for all users.
func (s *Financial) GetReportsEntityType(ctx context.Context, request operations.GetReportsEntityTypeRequest) (*operations.GetReportsEntityTypeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/reports/{entity_type}/", request.PathParams)

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

	res := &operations.GetReportsEntityTypeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CommitteeReportsPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommitteeReportsPage = out
		}
	}

	return res, nil
}

// GetTotalsByEntity -
// Provides cumulative receipt totals by entity type, over a two year cycle. Totals are adjusted to avoid double counting.
//
// This is [the sql](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V41__large_aggregates.sql) that creates these calculations.
func (s *Financial) GetTotalsByEntity(ctx context.Context, request operations.GetTotalsByEntityRequest) (*operations.GetTotalsByEntityResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/totals/by_entity/"

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

	res := &operations.GetTotalsByEntityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EntityReceiptDisbursementTotalsPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EntityReceiptDisbursementTotalsPage = out
		}
	}

	return res, nil
}

// GetTotalsEntityType -
// This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
// which are aggregated by two-year period. We refer to two-year periods as a `cycle`.
//
// The cycle is named after the even-numbered year and includes the year before it. To obtain
// totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
// is the next year — for example, in 2015, the current cycle is 2016.
//
// For presidential and Senate candidates, multiple two-year cycles exist between elections.
func (s *Financial) GetTotalsEntityType(ctx context.Context, request operations.GetTotalsEntityTypeRequest) (*operations.GetTotalsEntityTypeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/totals/{entity_type}/", request.PathParams)

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

	res := &operations.GetTotalsEntityTypeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CommitteeTotalsPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommitteeTotalsPage = out
		}
	}

	return res, nil
}
