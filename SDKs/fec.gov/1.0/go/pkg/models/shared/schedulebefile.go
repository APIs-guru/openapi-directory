package shared

import (
	"time"
)

type ScheduleBEfile struct {
	AmendmentIndicator         *string           `json:"amendment_indicator"`
	BackReferenceScheduleName  *string           `json:"back_reference_schedule_name"`
	BackReferenceTransactionID *string           `json:"back_reference_transaction_id"`
	BeginningImageNumber       *string           `json:"beginning_image_number"`
	BeneficiaryCommitteeName   *string           `json:"beneficiary_committee_name"`
	CandidateOffice            *string           `json:"candidate_office"`
	CandidateOfficeDistrict    *string           `json:"candidate_office_district"`
	Committee                  *CommitteeHistory `json:"committee"`
	CommitteeID                *string           `json:"committee_id"`
	CsvURL                     *string           `json:"csv_url"`
	DisbursementAmount         *float64          `json:"disbursement_amount"`
	DisbursementDate           *time.Time        `json:"disbursement_date"`
	DisbursementDescription    *string           `json:"disbursement_description"`
	DisbursementType           *string           `json:"disbursement_type"`
	EntityType                 *string           `json:"entity_type"`
	FecURL                     *string           `json:"fec_url"`
	FileNumber                 int32             `json:"file_number"`
	Filing                     *EFilings         `json:"filing"`
	ImageNumber                *string           `json:"image_number"`
	IsNotice                   *bool             `json:"is_notice"`
	LineNumber                 *string           `json:"line_number"`
	LoadTimestamp              *time.Time        `json:"load_timestamp"`
	MemoCode                   *string           `json:"memo_code"`
	MemoText                   *string           `json:"memo_text"`
	PayeeName                  *string           `json:"payee_name"`
	PdfURL                     *string           `json:"pdf_url"`
	RecipientCity              *string           `json:"recipient_city"`
	RecipientName              *string           `json:"recipient_name"`
	RecipientPrefix            *string           `json:"recipient_prefix"`
	RecipientState             *string           `json:"recipient_state"`
	RecipientSuffix            *string           `json:"recipient_suffix"`
	RecipientZip               *string           `json:"recipient_zip"`
	RelatedLineNumber          int32             `json:"related_line_number"`
	ReportType                 *string           `json:"report_type"`
	SemiAnnualBundledRefund    *int32            `json:"semi_annual_bundled_refund"`
	TransactionID              *string           `json:"transaction_id"`
}
