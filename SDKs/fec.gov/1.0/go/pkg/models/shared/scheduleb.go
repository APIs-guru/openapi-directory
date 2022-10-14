package shared

import (
	"time"
)

type ScheduleB struct {
	AmendmentIndicator                 *string           `json:"amendment_indicator,omitempty"`
	AmendmentIndicatorDesc             *string           `json:"amendment_indicator_desc,omitempty"`
	BackReferenceScheduleID            *string           `json:"back_reference_schedule_id,omitempty"`
	BackReferenceTransactionID         *string           `json:"back_reference_transaction_id,omitempty"`
	BeneficiaryCommitteeName           *string           `json:"beneficiary_committee_name,omitempty"`
	CandidateFirstName                 *string           `json:"candidate_first_name,omitempty"`
	CandidateID                        *string           `json:"candidate_id,omitempty"`
	CandidateLastName                  *string           `json:"candidate_last_name,omitempty"`
	CandidateMiddleName                *string           `json:"candidate_middle_name,omitempty"`
	CandidateName                      *string           `json:"candidate_name,omitempty"`
	CandidateOffice                    *string           `json:"candidate_office,omitempty"`
	CandidateOfficeDescription         *string           `json:"candidate_office_description,omitempty"`
	CandidateOfficeDistrict            *string           `json:"candidate_office_district,omitempty"`
	CandidateOfficeState               *string           `json:"candidate_office_state,omitempty"`
	CandidateOfficeStateFull           *string           `json:"candidate_office_state_full,omitempty"`
	CandidatePrefix                    *string           `json:"candidate_prefix,omitempty"`
	CandidateSuffix                    *string           `json:"candidate_suffix,omitempty"`
	CategoryCode                       *string           `json:"category_code,omitempty"`
	CategoryCodeFull                   *string           `json:"category_code_full,omitempty"`
	CommDt                             *time.Time        `json:"comm_dt,omitempty"`
	Committee                          *CommitteeHistory `json:"committee,omitempty"`
	CommitteeID                        *string           `json:"committee_id,omitempty"`
	ConduitCommitteeCity               *string           `json:"conduit_committee_city,omitempty"`
	ConduitCommitteeName               *string           `json:"conduit_committee_name,omitempty"`
	ConduitCommitteeState              *string           `json:"conduit_committee_state,omitempty"`
	ConduitCommitteeStreet1            *string           `json:"conduit_committee_street1,omitempty"`
	ConduitCommitteeStreet2            *string           `json:"conduit_committee_street2,omitempty"`
	ConduitCommitteeZip                *int32            `json:"conduit_committee_zip,omitempty"`
	DisbursementAmount                 *float64          `json:"disbursement_amount,omitempty"`
	DisbursementDate                   *time.Time        `json:"disbursement_date,omitempty"`
	DisbursementDescription            *string           `json:"disbursement_description,omitempty"`
	DisbursementPurposeCategory        *string           `json:"disbursement_purpose_category,omitempty"`
	DisbursementType                   *string           `json:"disbursement_type,omitempty"`
	DisbursementTypeDescription        *string           `json:"disbursement_type_description,omitempty"`
	ElectionType                       *string           `json:"election_type,omitempty"`
	ElectionTypeFull                   *string           `json:"election_type_full,omitempty"`
	EntityType                         *string           `json:"entity_type,omitempty"`
	EntityTypeDesc                     *string           `json:"entity_type_desc,omitempty"`
	FecElectionTypeDesc                *string           `json:"fec_election_type_desc,omitempty"`
	FecElectionYear                    *string           `json:"fec_election_year,omitempty"`
	FileNumber                         *int32            `json:"file_number,omitempty"`
	FilingForm                         *string           `json:"filing_form,omitempty"`
	ImageNumber                        *string           `json:"image_number,omitempty"`
	LineNumber                         *string           `json:"line_number,omitempty"`
	LineNumberLabel                    *string           `json:"line_number_label,omitempty"`
	LinkID                             *int32            `json:"link_id,omitempty"`
	LoadDate                           *time.Time        `json:"load_date,omitempty"`
	MemoCode                           *string           `json:"memo_code,omitempty"`
	MemoCodeFull                       *string           `json:"memo_code_full,omitempty"`
	MemoText                           *string           `json:"memo_text,omitempty"`
	MemoedSubtotal                     *bool             `json:"memoed_subtotal,omitempty"`
	NationalCommitteeNonfederalAccount *string           `json:"national_committee_nonfederal_account,omitempty"`
	OriginalSubID                      *string           `json:"original_sub_id,omitempty"`
	PayeeEmployer                      *string           `json:"payee_employer,omitempty"`
	PayeeFirstName                     *string           `json:"payee_first_name,omitempty"`
	PayeeLastName                      *string           `json:"payee_last_name,omitempty"`
	PayeeMiddleName                    *string           `json:"payee_middle_name,omitempty"`
	PayeeOccupation                    *string           `json:"payee_occupation,omitempty"`
	PayeePrefix                        *string           `json:"payee_prefix,omitempty"`
	PayeeSuffix                        *string           `json:"payee_suffix,omitempty"`
	PdfURL                             *string           `json:"pdf_url,omitempty"`
	RecipientCity                      *string           `json:"recipient_city,omitempty"`
	RecipientCommittee                 *CommitteeHistory `json:"recipient_committee,omitempty"`
	RecipientCommitteeID               *string           `json:"recipient_committee_id,omitempty"`
	RecipientName                      *string           `json:"recipient_name,omitempty"`
	RecipientState                     *string           `json:"recipient_state,omitempty"`
	RecipientZip                       *string           `json:"recipient_zip,omitempty"`
	RefDispExcessFlg                   *string           `json:"ref_disp_excess_flg,omitempty"`
	ReportType                         *string           `json:"report_type,omitempty"`
	ReportYear                         *int32            `json:"report_year,omitempty"`
	ScheduleType                       *string           `json:"schedule_type,omitempty"`
	ScheduleTypeFull                   *string           `json:"schedule_type_full,omitempty"`
	SemiAnnualBundledRefund            *float64          `json:"semi_annual_bundled_refund,omitempty"`
	SpenderCommitteeDesignation        *string           `json:"spender_committee_designation,omitempty"`
	SpenderCommitteeOrgType            *string           `json:"spender_committee_org_type,omitempty"`
	SpenderCommitteeType               *string           `json:"spender_committee_type,omitempty"`
	SubID                              *string           `json:"sub_id,omitempty"`
	TransactionID                      *string           `json:"transaction_id,omitempty"`
	TwoYearTransactionPeriod           *int32            `json:"two_year_transaction_period,omitempty"`
	UnusedRecipientCommitteeID         *string           `json:"unused_recipient_committee_id,omitempty"`
}
