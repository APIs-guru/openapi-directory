package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetSchedulesScheduleBEfileQueryParams struct {
	APIKey                  string     `queryParam:"style=form,explode=true,name=api_key"`
	CommitteeID             []string   `queryParam:"style=form,explode=true,name=committee_id"`
	DisbursementDescription []string   `queryParam:"style=form,explode=true,name=disbursement_description"`
	ImageNumber             []string   `queryParam:"style=form,explode=true,name=image_number"`
	MaxAmount               *string    `queryParam:"style=form,explode=true,name=max_amount"`
	MaxDate                 *time.Time `queryParam:"style=form,explode=true,name=max_date"`
	MinAmount               *string    `queryParam:"style=form,explode=true,name=min_amount"`
	MinDate                 *time.Time `queryParam:"style=form,explode=true,name=min_date"`
	Page                    *int32     `queryParam:"style=form,explode=true,name=page"`
	PerPage                 *int32     `queryParam:"style=form,explode=true,name=per_page"`
	RecipientCity           []string   `queryParam:"style=form,explode=true,name=recipient_city"`
	RecipientState          []string   `queryParam:"style=form,explode=true,name=recipient_state"`
	Sort                    *string    `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull            *bool      `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly            *bool      `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast           *bool      `queryParam:"style=form,explode=true,name=sort_nulls_last"`
}

type GetSchedulesScheduleBEfileRequest struct {
	QueryParams GetSchedulesScheduleBEfileQueryParams
}

type GetSchedulesScheduleBEfileResponse struct {
	ContentType        string
	ScheduleBEfilePage *shared.ScheduleBEfilePage
	StatusCode         int64
}
