package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetSchedulesScheduleAEfileQueryParams struct {
	APIKey                string     `queryParam:"style=form,explode=true,name=api_key"`
	CommitteeID           []string   `queryParam:"style=form,explode=true,name=committee_id"`
	ContributorCity       []string   `queryParam:"style=form,explode=true,name=contributor_city"`
	ContributorEmployer   []string   `queryParam:"style=form,explode=true,name=contributor_employer"`
	ContributorName       []string   `queryParam:"style=form,explode=true,name=contributor_name"`
	ContributorOccupation []string   `queryParam:"style=form,explode=true,name=contributor_occupation"`
	ContributorState      []string   `queryParam:"style=form,explode=true,name=contributor_state"`
	ImageNumber           []string   `queryParam:"style=form,explode=true,name=image_number"`
	LineNumber            *string    `queryParam:"style=form,explode=true,name=line_number"`
	MaxAmount             *string    `queryParam:"style=form,explode=true,name=max_amount"`
	MaxDate               *time.Time `queryParam:"style=form,explode=true,name=max_date"`
	MaxImageNumber        *string    `queryParam:"style=form,explode=true,name=max_image_number"`
	MinAmount             *string    `queryParam:"style=form,explode=true,name=min_amount"`
	MinDate               *time.Time `queryParam:"style=form,explode=true,name=min_date"`
	MinImageNumber        *string    `queryParam:"style=form,explode=true,name=min_image_number"`
	Page                  *int32     `queryParam:"style=form,explode=true,name=page"`
	PerPage               *int32     `queryParam:"style=form,explode=true,name=per_page"`
	Sort                  *string    `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull          *bool      `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly          *bool      `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast         *bool      `queryParam:"style=form,explode=true,name=sort_nulls_last"`
}

type GetSchedulesScheduleAEfileRequest struct {
	QueryParams GetSchedulesScheduleAEfileQueryParams
}

type GetSchedulesScheduleAEfileResponse struct {
	ContentType        string
	ScheduleAEfilePage *shared.ScheduleAEfilePage
	StatusCode         int64
}
