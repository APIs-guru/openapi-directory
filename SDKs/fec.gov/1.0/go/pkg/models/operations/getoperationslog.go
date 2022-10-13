package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetOperationsLogStatusNumEnum string

const (
	GetOperationsLogStatusNumEnumZero GetOperationsLogStatusNumEnum = "0"
	GetOperationsLogStatusNumEnumOne  GetOperationsLogStatusNumEnum = "1"
)

type GetOperationsLogQueryParams struct {
	AmendmentIndicator             []string                        `queryParam:"style=form,explode=true,name=amendment_indicator"`
	APIKey                         string                          `queryParam:"style=form,explode=true,name=api_key"`
	BeginningImageNumber           []string                        `queryParam:"style=form,explode=true,name=beginning_image_number"`
	CandidateCommitteeID           []string                        `queryParam:"style=form,explode=true,name=candidate_committee_id"`
	FormType                       []string                        `queryParam:"style=form,explode=true,name=form_type"`
	MaxCoverageEndDate             *time.Time                      `queryParam:"style=form,explode=true,name=max_coverage_end_date"`
	MaxReceiptDate                 *time.Time                      `queryParam:"style=form,explode=true,name=max_receipt_date"`
	MaxTransactionDataCompleteDate *time.Time                      `queryParam:"style=form,explode=true,name=max_transaction_data_complete_date"`
	MinCoverageEndDate             *time.Time                      `queryParam:"style=form,explode=true,name=min_coverage_end_date"`
	MinReceiptDate                 *time.Time                      `queryParam:"style=form,explode=true,name=min_receipt_date"`
	MinTransactionDataCompleteDate *time.Time                      `queryParam:"style=form,explode=true,name=min_transaction_data_complete_date"`
	Page                           *int32                          `queryParam:"style=form,explode=true,name=page"`
	PerPage                        *int32                          `queryParam:"style=form,explode=true,name=per_page"`
	ReportType                     []string                        `queryParam:"style=form,explode=true,name=report_type"`
	ReportYear                     []int32                         `queryParam:"style=form,explode=true,name=report_year"`
	Sort                           []string                        `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull                   *bool                           `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly                   *bool                           `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast                  *bool                           `queryParam:"style=form,explode=true,name=sort_nulls_last"`
	StatusNum                      []GetOperationsLogStatusNumEnum `queryParam:"style=form,explode=true,name=status_num"`
}

type GetOperationsLogRequest struct {
	QueryParams GetOperationsLogQueryParams
}

type GetOperationsLogResponse struct {
	ContentType       string
	OperationsLogPage *shared.OperationsLogPage
	StatusCode        int64
}
