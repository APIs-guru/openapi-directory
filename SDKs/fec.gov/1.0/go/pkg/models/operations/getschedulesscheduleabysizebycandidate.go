package operations

import (
	"openapi/pkg/models/shared"
)

type GetSchedulesScheduleABySizeByCandidateQueryParams struct {
	APIKey        string   `queryParam:"style=form,explode=true,name=api_key"`
	CandidateID   []string `queryParam:"style=form,explode=true,name=candidate_id"`
	Cycle         []int32  `queryParam:"style=form,explode=true,name=cycle"`
	ElectionFull  *bool    `queryParam:"style=form,explode=true,name=election_full"`
	Page          *int32   `queryParam:"style=form,explode=true,name=page"`
	PerPage       *int32   `queryParam:"style=form,explode=true,name=per_page"`
	Sort          *string  `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull  *bool    `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly  *bool    `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast *bool    `queryParam:"style=form,explode=true,name=sort_nulls_last"`
}

type GetSchedulesScheduleABySizeByCandidateRequest struct {
	QueryParams GetSchedulesScheduleABySizeByCandidateQueryParams
}

type GetSchedulesScheduleABySizeByCandidateResponse struct {
	ContentType                  string
	ScheduleABySizeCandidatePage *shared.ScheduleABySizeCandidatePage
	StatusCode                   int64
}
