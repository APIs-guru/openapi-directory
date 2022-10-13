package shared

import (
	"time"
)

type ScheduleE struct {
	ActionCode                     *string           `json:"action_code"`
	ActionCodeFull                 *string           `json:"action_code_full"`
	AmendmentIndicator             *string           `json:"amendment_indicator"`
	AmendmentNumber                *int32            `json:"amendment_number"`
	BackReferenceScheduleName      *string           `json:"back_reference_schedule_name"`
	BackReferenceTransactionID     *string           `json:"back_reference_transaction_id"`
	Candidate                      *string           `json:"candidate"`
	CandidateFirstName             *string           `json:"candidate_first_name"`
	CandidateID                    *string           `json:"candidate_id"`
	CandidateLastName              *string           `json:"candidate_last_name"`
	CandidateMiddleName            *string           `json:"candidate_middle_name"`
	CandidateName                  *string           `json:"candidate_name"`
	CandidateOffice                *string           `json:"candidate_office"`
	CandidateOfficeDistrict        *string           `json:"candidate_office_district"`
	CandidateOfficeState           *string           `json:"candidate_office_state"`
	CandidateParty                 *string           `json:"candidate_party"`
	CandidatePrefix                *string           `json:"candidate_prefix"`
	CandidateSuffix                *string           `json:"candidate_suffix"`
	CategoryCode                   *string           `json:"category_code"`
	CategoryCodeFull               *string           `json:"category_code_full"`
	Committee                      *CommitteeHistory `json:"committee"`
	CommitteeID                    *string           `json:"committee_id"`
	ConduitCommitteeCity           *string           `json:"conduit_committee_city"`
	ConduitCommitteeID             *string           `json:"conduit_committee_id"`
	ConduitCommitteeName           *string           `json:"conduit_committee_name"`
	ConduitCommitteeState          *string           `json:"conduit_committee_state"`
	ConduitCommitteeStreet1        *string           `json:"conduit_committee_street1"`
	ConduitCommitteeStreet2        *string           `json:"conduit_committee_street2"`
	ConduitCommitteeZip            *int32            `json:"conduit_committee_zip"`
	DisseminationDate              *time.Time        `json:"dissemination_date"`
	ElectionType                   *string           `json:"election_type"`
	ElectionTypeFull               *string           `json:"election_type_full"`
	ExpenditureAmount              *float64          `json:"expenditure_amount"`
	ExpenditureDate                *time.Time        `json:"expenditure_date"`
	ExpenditureDescription         *string           `json:"expenditure_description"`
	FileNumber                     *int32            `json:"file_number"`
	FilerFirstName                 *string           `json:"filer_first_name"`
	FilerLastName                  *string           `json:"filer_last_name"`
	FilerMiddleName                *string           `json:"filer_middle_name"`
	FilerPrefix                    *string           `json:"filer_prefix"`
	FilerSuffix                    *string           `json:"filer_suffix"`
	FilingDate                     *time.Time        `json:"filing_date"`
	FilingForm                     *string           `json:"filing_form"`
	ImageNumber                    *string           `json:"image_number"`
	IndependentSignDate            *time.Time        `json:"independent_sign_date"`
	IndependentSignName            *string           `json:"independent_sign_name"`
	IsNotice                       *bool             `json:"is_notice"`
	LineNumber                     *string           `json:"line_number"`
	LinkID                         *int32            `json:"link_id"`
	MemoCode                       *string           `json:"memo_code"`
	MemoCodeFull                   *string           `json:"memo_code_full"`
	MemoText                       *string           `json:"memo_text"`
	MemoedSubtotal                 *bool             `json:"memoed_subtotal"`
	MostRecent                     *bool             `json:"most_recent"`
	NotaryCommissionExpirationDate *time.Time        `json:"notary_commission_expiration_date"`
	NotarySignDate                 *time.Time        `json:"notary_sign_date"`
	NotarySignName                 *string           `json:"notary_sign_name"`
	OfficeTotalYtd                 *float64          `json:"office_total_ytd"`
	OriginalSubID                  *string           `json:"original_sub_id"`
	PayeeCity                      *string           `json:"payee_city"`
	PayeeFirstName                 *string           `json:"payee_first_name"`
	PayeeLastName                  *string           `json:"payee_last_name"`
	PayeeMiddleName                *string           `json:"payee_middle_name"`
	PayeeName                      *string           `json:"payee_name"`
	PayeePrefix                    *string           `json:"payee_prefix"`
	PayeeState                     *string           `json:"payee_state"`
	PayeeStreet1                   *string           `json:"payee_street_1"`
	PayeeStreet2                   *string           `json:"payee_street_2"`
	PayeeSuffix                    *string           `json:"payee_suffix"`
	PayeeZip                       *string           `json:"payee_zip"`
	PdfURL                         *string           `json:"pdf_url"`
	PreviousFileNumber             *int32            `json:"previous_file_number"`
	ReportType                     *string           `json:"report_type"`
	ReportYear                     *int32            `json:"report_year"`
	ScheduleType                   *string           `json:"schedule_type"`
	ScheduleTypeFull               *string           `json:"schedule_type_full"`
	SubID                          *string           `json:"sub_id"`
	SupportOpposeIndicator         *string           `json:"support_oppose_indicator"`
	TransactionID                  *string           `json:"transaction_id"`
}
