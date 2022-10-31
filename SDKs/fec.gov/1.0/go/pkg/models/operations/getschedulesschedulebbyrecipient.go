package operations

import (
	"openapi/pkg/models/shared"
)

type GetSchedulesScheduleBByRecipientQueryParams struct {
	APIKey        string   `queryParam:"style=form,explode=true,name=api_key"`
	CommitteeID   []string `queryParam:"style=form,explode=true,name=committee_id"`
	Cycle         []int32  `queryParam:"style=form,explode=true,name=cycle"`
	Page          *int32   `queryParam:"style=form,explode=true,name=page"`
	PerPage       *int32   `queryParam:"style=form,explode=true,name=per_page"`
	RecipientName []string `queryParam:"style=form,explode=true,name=recipient_name"`
	Sort          *string  `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull  *bool    `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly  *bool    `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast *bool    `queryParam:"style=form,explode=true,name=sort_nulls_last"`
}

type GetSchedulesScheduleBByRecipientRequest struct {
	QueryParams GetSchedulesScheduleBByRecipientQueryParams
}

type GetSchedulesScheduleBByRecipientResponse struct {
	ContentType              string
	ScheduleBByRecipientPage *shared.ScheduleBByRecipientPage
	StatusCode               int64
}
