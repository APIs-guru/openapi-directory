package shared

import (
	"time"
)

type OperationsLog struct {
	AmendmentIndicator          *string    `json:"amendment_indicator,omitempty"`
	BeginningImageNumber        *string    `json:"beginning_image_number,omitempty"`
	CandidateCommitteeID        *string    `json:"candidate_committee_id,omitempty"`
	CoverageEndDate             *time.Time `json:"coverage_end_date,omitempty"`
	CoverageStartDate           *time.Time `json:"coverage_start_date,omitempty"`
	EndingImageNumber           *string    `json:"ending_image_number,omitempty"`
	FormType                    *string    `json:"form_type,omitempty"`
	ReceiptDate                 *time.Time `json:"receipt_date,omitempty"`
	ReportType                  *string    `json:"report_type,omitempty"`
	ReportYear                  *int32     `json:"report_year,omitempty"`
	StatusNum                   *int32     `json:"status_num,omitempty"`
	SubID                       *int32     `json:"sub_id,omitempty"`
	SummaryDataCompleteDate     *time.Time `json:"summary_data_complete_date,omitempty"`
	SummaryDataVerificationDate *time.Time `json:"summary_data_verification_date,omitempty"`
	TransactionDataCompleteDate *time.Time `json:"transaction_data_complete_date,omitempty"`
}
