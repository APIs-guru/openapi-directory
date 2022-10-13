package operations

import (
	"openapi/pkg/models/shared"
)

type GetSchedulesScheduleBByPurposeQueryParams struct {
	APIKey        string   `queryParam:"style=form,explode=true,name=api_key"`
	CommitteeID   []string `queryParam:"style=form,explode=true,name=committee_id"`
	Cycle         []int32  `queryParam:"style=form,explode=true,name=cycle"`
	Page          *int32   `queryParam:"style=form,explode=true,name=page"`
	PerPage       *int32   `queryParam:"style=form,explode=true,name=per_page"`
	Purpose       []string `queryParam:"style=form,explode=true,name=purpose"`
	Sort          *string  `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull  *bool    `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly  *bool    `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast *bool    `queryParam:"style=form,explode=true,name=sort_nulls_last"`
}

type GetSchedulesScheduleBByPurposeRequest struct {
	QueryParams GetSchedulesScheduleBByPurposeQueryParams
}

type GetSchedulesScheduleBByPurposeResponse struct {
	ContentType            string
	ScheduleBByPurposePage *shared.ScheduleBByPurposePage
	StatusCode             int64
}
