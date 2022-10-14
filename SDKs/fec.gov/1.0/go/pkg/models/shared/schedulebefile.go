package shared

import (
	"time"
)

type ScheduleBEfile struct {
	AmendmentIndicator         *string           `json:"amendment_indicator,omitempty"`
	BackReferenceScheduleName  *string           `json:"back_reference_schedule_name,omitempty"`
	BackReferenceTransactionID *string           `json:"back_reference_transaction_id,omitempty"`
	BeginningImageNumber       *string           `json:"beginning_image_number,omitempty"`
	BeneficiaryCommitteeName   *string           `json:"beneficiary_committee_name,omitempty"`
	CandidateOffice            *string           `json:"candidate_office,omitempty"`
	CandidateOfficeDistrict    *string           `json:"candidate_office_district,omitempty"`
	Committee                  *CommitteeHistory `json:"committee,omitempty"`
	CommitteeID                *string           `json:"committee_id,omitempty"`
	CsvURL                     *string           `json:"csv_url,omitempty"`
	DisbursementAmount         *float64          `json:"disbursement_amount,omitempty"`
	DisbursementDate           *time.Time        `json:"disbursement_date,omitempty"`
	DisbursementDescription    *string           `json:"disbursement_description,omitempty"`
	DisbursementType           *string           `json:"disbursement_type,omitempty"`
	EntityType                 *string           `json:"entity_type,omitempty"`
	FecURL                     *string           `json:"fec_url,omitempty"`
	FileNumber                 int32             `json:"file_number"`
	Filing                     *EFilings         `json:"filing,omitempty"`
	ImageNumber                *string           `json:"image_number,omitempty"`
	IsNotice                   *bool             `json:"is_notice,omitempty"`
	LineNumber                 *string           `json:"line_number,omitempty"`
	LoadTimestamp              *time.Time        `json:"load_timestamp,omitempty"`
	MemoCode                   *string           `json:"memo_code,omitempty"`
	MemoText                   *string           `json:"memo_text,omitempty"`
	PayeeName                  *string           `json:"payee_name,omitempty"`
	PdfURL                     *string           `json:"pdf_url,omitempty"`
	RecipientCity              *string           `json:"recipient_city,omitempty"`
	RecipientName              *string           `json:"recipient_name,omitempty"`
	RecipientPrefix            *string           `json:"recipient_prefix,omitempty"`
	RecipientState             *string           `json:"recipient_state,omitempty"`
	RecipientSuffix            *string           `json:"recipient_suffix,omitempty"`
	RecipientZip               *string           `json:"recipient_zip,omitempty"`
	RelatedLineNumber          int32             `json:"related_line_number"`
	ReportType                 *string           `json:"report_type,omitempty"`
	SemiAnnualBundledRefund    *int32            `json:"semi_annual_bundled_refund,omitempty"`
	TransactionID              *string           `json:"transaction_id,omitempty"`
}
