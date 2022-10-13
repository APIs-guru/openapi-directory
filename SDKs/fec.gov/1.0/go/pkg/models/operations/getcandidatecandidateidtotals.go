package operations

import (
	"openapi/pkg/models/shared"
)

type GetCandidateCandidateIDTotalsPathParams struct {
	CandidateID string `pathParam:"style=simple,explode=false,name=candidate_id"`
}

type GetCandidateCandidateIDTotalsQueryParams struct {
	APIKey        string  `queryParam:"style=form,explode=true,name=api_key"`
	Cycle         []int32 `queryParam:"style=form,explode=true,name=cycle"`
	ElectionFull  *bool   `queryParam:"style=form,explode=true,name=election_full"`
	Page          *int32  `queryParam:"style=form,explode=true,name=page"`
	PerPage       *int32  `queryParam:"style=form,explode=true,name=per_page"`
	Sort          *string `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull  *bool   `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly  *bool   `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast *bool   `queryParam:"style=form,explode=true,name=sort_nulls_last"`
}

type GetCandidateCandidateIDTotalsRequest struct {
	PathParams  GetCandidateCandidateIDTotalsPathParams
	QueryParams GetCandidateCandidateIDTotalsQueryParams
}

type GetCandidateCandidateIDTotalsResponse struct {
	CommitteeTotalsPage *shared.CommitteeTotalsPage
	ContentType         string
	StatusCode          int64
}
