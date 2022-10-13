package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetEfileReportsHouseSenateQueryParams struct {
	APIKey         string     `queryParam:"style=form,explode=true,name=api_key"`
	CommitteeID    []string   `queryParam:"style=form,explode=true,name=committee_id"`
	FileNumber     []int32    `queryParam:"style=form,explode=true,name=file_number"`
	MaxReceiptDate *time.Time `queryParam:"style=form,explode=true,name=max_receipt_date"`
	MinReceiptDate *time.Time `queryParam:"style=form,explode=true,name=min_receipt_date"`
	Page           *int32     `queryParam:"style=form,explode=true,name=page"`
	PerPage        *int32     `queryParam:"style=form,explode=true,name=per_page"`
	Sort           *string    `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull   *bool      `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly   *bool      `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast  *bool      `queryParam:"style=form,explode=true,name=sort_nulls_last"`
}

type GetEfileReportsHouseSenateRequest struct {
	QueryParams GetEfileReportsHouseSenateQueryParams
}

type GetEfileReportsHouseSenateResponse struct {
	BaseF3FilingPage *shared.BaseF3FilingPage
	ContentType      string
	StatusCode       int64
}
