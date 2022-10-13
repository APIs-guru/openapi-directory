package shared

import (
	"time"
)

type OperationsLog struct {
	AmendmentIndicator          *string    `json:"amendment_indicator"`
	BeginningImageNumber        *string    `json:"beginning_image_number"`
	CandidateCommitteeID        *string    `json:"candidate_committee_id"`
	CoverageEndDate             *time.Time `json:"coverage_end_date"`
	CoverageStartDate           *time.Time `json:"coverage_start_date"`
	EndingImageNumber           *string    `json:"ending_image_number"`
	FormType                    *string    `json:"form_type"`
	ReceiptDate                 *time.Time `json:"receipt_date"`
	ReportType                  *string    `json:"report_type"`
	ReportYear                  *int32     `json:"report_year"`
	StatusNum                   *int32     `json:"status_num"`
	SubID                       *int32     `json:"sub_id"`
	SummaryDataCompleteDate     *time.Time `json:"summary_data_complete_date"`
	SummaryDataVerificationDate *time.Time `json:"summary_data_verification_date"`
	TransactionDataCompleteDate *time.Time `json:"transaction_data_complete_date"`
}
