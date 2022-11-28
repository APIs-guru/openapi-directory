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

type Candidate struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCandidate(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Candidate {
	return &Candidate{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetCandidateCandidateID -
// This endpoint is useful for finding detailed information about a particular candidate. Use the
// `candidate_id` to find the most recent information about that candidate.
func (s *Candidate) GetCandidateCandidateID(ctx context.Context, request operations.GetCandidateCandidateIDRequest) (*operations.GetCandidateCandidateIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/candidate/{candidate_id}/", request.PathParams)

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

	res := &operations.GetCandidateCandidateIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CandidateDetailPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CandidateDetailPage = out
		}
	}

	return res, nil
}

// GetCandidateCandidateIDHistory -
// Find out a candidate's characteristics over time. This is particularly useful if the
// candidate runs for the same office in different districts or you want to know more about a candidate's
// previous races.
//
// This information is organized by `candidate_id`, so it won't help you find a candidate
// who ran for different offices over time; candidates get a new ID for each office.
func (s *Candidate) GetCandidateCandidateIDHistory(ctx context.Context, request operations.GetCandidateCandidateIDHistoryRequest) (*operations.GetCandidateCandidateIDHistoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/candidate/{candidate_id}/history/", request.PathParams)

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

	res := &operations.GetCandidateCandidateIDHistoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CandidateHistoryPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CandidateHistoryPage = out
		}
	}

	return res, nil
}

// GetCandidateCandidateIDHistoryCycle -
// Find out a candidate's characteristics over time. This is particularly useful if the
// candidate runs for the same office in different districts or you want to know more about a candidate's
// previous races.
//
// This information is organized by `candidate_id`, so it won't help you find a candidate
// who ran for different offices over time; candidates get a new ID for each office.
func (s *Candidate) GetCandidateCandidateIDHistoryCycle(ctx context.Context, request operations.GetCandidateCandidateIDHistoryCycleRequest) (*operations.GetCandidateCandidateIDHistoryCycleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/candidate/{candidate_id}/history/{cycle}/", request.PathParams)

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

	res := &operations.GetCandidateCandidateIDHistoryCycleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CandidateHistoryPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CandidateHistoryPage = out
		}
	}

	return res, nil
}

// GetCandidateCandidateIDTotals -
// This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
// which are aggregated by two-year period. We refer to two-year periods as a `cycle`.
//
// The cycle is named after the even-numbered year and includes the year before it. To obtain
// totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
// is the next year — for example, in 2015, the current cycle is 2016.
//
// For presidential and Senate candidates, multiple two-year cycles exist between elections.
func (s *Candidate) GetCandidateCandidateIDTotals(ctx context.Context, request operations.GetCandidateCandidateIDTotalsRequest) (*operations.GetCandidateCandidateIDTotalsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/candidate/{candidate_id}/totals/", request.PathParams)

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

	res := &operations.GetCandidateCandidateIDTotalsResponse{
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

// GetCandidates -
// Fetch basic information about candidates, and use parameters to filter results to the
// candidates you're looking for.
//
// Each result reflects a unique FEC candidate ID. That ID is particular to the candidate for a
// particular office sought. If a candidate runs for the same office multiple times, the ID
// stays the same. If the same person runs for another office — for example, a House
// candidate runs for a Senate office — that candidate will get a unique ID for each office.
func (s *Candidate) GetCandidates(ctx context.Context, request operations.GetCandidatesRequest) (*operations.GetCandidatesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/candidates/"

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

	res := &operations.GetCandidatesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CandidatePage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CandidatePage = out
		}
	}

	return res, nil
}

// GetCandidatesSearch -
// Fetch basic information about candidates and their principal committees.
//
// Each result reflects a unique FEC candidate ID. That ID is assigned to the candidate for a
// particular office sought. If a candidate runs for the same office over time, that ID
// stays the same. If the same person runs for multiple offices — for example, a House
// candidate runs for a Senate office — that candidate will get a unique ID for each office.
//
// The candidate endpoints primarily use data from FEC registration
// [Form 1](http://www.fec.gov/pdf/forms/fecfrm1.pdf) for committee information and
// [Form 2](http://www.fec.gov/pdf/forms/fecfrm2.pdf) for candidate information.
func (s *Candidate) GetCandidatesSearch(ctx context.Context, request operations.GetCandidatesSearchRequest) (*operations.GetCandidatesSearchResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/candidates/search/"

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

	res := &operations.GetCandidatesSearchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CandidatePage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CandidatePage = out
		}
	}

	return res, nil
}

// GetCandidatesTotals -
// Aggregated candidate receipts and disbursements grouped by cycle.
func (s *Candidate) GetCandidatesTotals(ctx context.Context, request operations.GetCandidatesTotalsRequest) (*operations.GetCandidatesTotalsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/candidates/totals/"

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

	res := &operations.GetCandidatesTotalsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CandidateHistoryTotalPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CandidateHistoryTotalPage = out
		}
	}

	return res, nil
}

// GetCandidatesTotalsByOffice -  Aggregated candidate receipts and disbursements grouped by office by cycle.
func (s *Candidate) GetCandidatesTotalsByOffice(ctx context.Context, request operations.GetCandidatesTotalsByOfficeRequest) (*operations.GetCandidatesTotalsByOfficeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/candidates/totals/by_office/"

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

	res := &operations.GetCandidatesTotalsByOfficeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.TotalByOfficePage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TotalByOfficePage = out
		}
	}

	return res, nil
}

// GetCandidatesTotalsByOfficeByParty -  Aggregated candidate receipts and disbursements grouped by office by party by cycle.
func (s *Candidate) GetCandidatesTotalsByOfficeByParty(ctx context.Context, request operations.GetCandidatesTotalsByOfficeByPartyRequest) (*operations.GetCandidatesTotalsByOfficeByPartyResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/candidates/totals/by_office/by_party/"

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

	res := &operations.GetCandidatesTotalsByOfficeByPartyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.TotalByOfficeByPartyPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TotalByOfficeByPartyPage = out
		}
	}

	return res, nil
}

// GetCommitteeCommitteeIDCandidates -
// This endpoint is useful for finding detailed information about a particular candidate. Use the
// `candidate_id` to find the most recent information about that candidate.
func (s *Candidate) GetCommitteeCommitteeIDCandidates(ctx context.Context, request operations.GetCommitteeCommitteeIDCandidatesRequest) (*operations.GetCommitteeCommitteeIDCandidatesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/committee/{committee_id}/candidates/", request.PathParams)

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

	res := &operations.GetCommitteeCommitteeIDCandidatesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CandidateDetailPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CandidateDetailPage = out
		}
	}

	return res, nil
}

// GetCommitteeCommitteeIDCandidatesHistory -
// Find out a candidate's characteristics over time. This is particularly useful if the
// candidate runs for the same office in different districts or you want to know more about a candidate's
// previous races.
//
// This information is organized by `candidate_id`, so it won't help you find a candidate
// who ran for different offices over time; candidates get a new ID for each office.
func (s *Candidate) GetCommitteeCommitteeIDCandidatesHistory(ctx context.Context, request operations.GetCommitteeCommitteeIDCandidatesHistoryRequest) (*operations.GetCommitteeCommitteeIDCandidatesHistoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/committee/{committee_id}/candidates/history/", request.PathParams)

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

	res := &operations.GetCommitteeCommitteeIDCandidatesHistoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CandidateHistoryPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CandidateHistoryPage = out
		}
	}

	return res, nil
}

// GetCommitteeCommitteeIDCandidatesHistoryCycle -
// Find out a candidate's characteristics over time. This is particularly useful if the
// candidate runs for the same office in different districts or you want to know more about a candidate's
// previous races.
//
// This information is organized by `candidate_id`, so it won't help you find a candidate
// who ran for different offices over time; candidates get a new ID for each office.
func (s *Candidate) GetCommitteeCommitteeIDCandidatesHistoryCycle(ctx context.Context, request operations.GetCommitteeCommitteeIDCandidatesHistoryCycleRequest) (*operations.GetCommitteeCommitteeIDCandidatesHistoryCycleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/committee/{committee_id}/candidates/history/{cycle}/", request.PathParams)

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

	res := &operations.GetCommitteeCommitteeIDCandidatesHistoryCycleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CandidateHistoryPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CandidateHistoryPage = out
		}
	}

	return res, nil
}
