package shared

import (
	"time"
)

type ScheduleEEfile struct {
	AmendmentIndicator         *string           `json:"amendment_indicator"`
	BackReferenceScheduleName  *string           `json:"back_reference_schedule_name"`
	BackReferenceTransactionID *string           `json:"back_reference_transaction_id"`
	BeginningImageNumber       *string           `json:"beginning_image_number"`
	CandidateFirstName         *string           `json:"candidate_first_name"`
	CandidateID                *string           `json:"candidate_id"`
	CandidateMiddleName        *string           `json:"candidate_middle_name"`
	CandidateName              *string           `json:"candidate_name"`
	CandidateOffice            *string           `json:"candidate_office"`
	CandidateOfficeDistrict    *string           `json:"candidate_office_district"`
	CandidateOfficeState       *string           `json:"candidate_office_state"`
	CandidateParty             *string           `json:"candidate_party"`
	CandidatePrefix            *string           `json:"candidate_prefix"`
	CandidateSuffix            *string           `json:"candidate_suffix"`
	CategoryCode               *string           `json:"category_code"`
	Committee                  *CommitteeHistory `json:"committee"`
	CommitteeID                *string           `json:"committee_id"`
	CsvURL                     *string           `json:"csv_url"`
	DisseminationDate          *time.Time        `json:"dissemination_date"`
	EntityType                 *string           `json:"entity_type"`
	ExpenditureAmount          *int32            `json:"expenditure_amount"`
	ExpenditureDate            *time.Time        `json:"expenditure_date"`
	ExpenditureDescription     *string           `json:"expenditure_description"`
	FecURL                     *string           `json:"fec_url"`
	FileNumber                 int32             `json:"file_number"`
	FilerFirstName             *string           `json:"filer_first_name"`
	FilerLastName              *string           `json:"filer_last_name"`
	FilerMiddleName            *string           `json:"filer_middle_name"`
	FilerPrefix                *string           `json:"filer_prefix"`
	FilerSuffix                *string           `json:"filer_suffix"`
	Filing                     *EFilings         `json:"filing"`
	FilingForm                 *string           `json:"filing_form"`
	ImageNumber                *string           `json:"image_number"`
	IsNotice                   *bool             `json:"is_notice"`
	LineNumber                 *string           `json:"line_number"`
	LoadTimestamp              *time.Time        `json:"load_timestamp"`
	MemoCode                   *string           `json:"memo_code"`
	MemoText                   *string           `json:"memo_text"`
	MostRecent                 *bool             `json:"most_recent"`
	NotarySignDate             *time.Time        `json:"notary_sign_date"`
	OfficeTotalYtd             *float32          `json:"office_total_ytd"`
	PayeeCity                  *string           `json:"payee_city"`
	PayeeFirstName             *string           `json:"payee_first_name"`
	PayeeLastName              *string           `json:"payee_last_name"`
	PayeeMiddleName            *string           `json:"payee_middle_name"`
	PayeeName                  *string           `json:"payee_name"`
	PayeePrefix                *string           `json:"payee_prefix"`
	PayeeState                 *string           `json:"payee_state"`
	PayeeStreet1               *string           `json:"payee_street_1"`
	PayeeStreet2               *string           `json:"payee_street_2"`
	PayeeSuffix                *string           `json:"payee_suffix"`
	PayeeZip                   *string           `json:"payee_zip"`
	PdfURL                     *string           `json:"pdf_url"`
	RelatedLineNumber          int32             `json:"related_line_number"`
	ReportType                 *string           `json:"report_type"`
	SupportOpposeIndicator     *string           `json:"support_oppose_indicator"`
	TransactionID              *string           `json:"transaction_id"`
}
