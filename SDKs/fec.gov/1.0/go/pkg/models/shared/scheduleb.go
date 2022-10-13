package shared

import (
	"time"
)

type ScheduleB struct {
	AmendmentIndicator                 *string           `json:"amendment_indicator"`
	AmendmentIndicatorDesc             *string           `json:"amendment_indicator_desc"`
	BackReferenceScheduleID            *string           `json:"back_reference_schedule_id"`
	BackReferenceTransactionID         *string           `json:"back_reference_transaction_id"`
	BeneficiaryCommitteeName           *string           `json:"beneficiary_committee_name"`
	CandidateFirstName                 *string           `json:"candidate_first_name"`
	CandidateID                        *string           `json:"candidate_id"`
	CandidateLastName                  *string           `json:"candidate_last_name"`
	CandidateMiddleName                *string           `json:"candidate_middle_name"`
	CandidateName                      *string           `json:"candidate_name"`
	CandidateOffice                    *string           `json:"candidate_office"`
	CandidateOfficeDescription         *string           `json:"candidate_office_description"`
	CandidateOfficeDistrict            *string           `json:"candidate_office_district"`
	CandidateOfficeState               *string           `json:"candidate_office_state"`
	CandidateOfficeStateFull           *string           `json:"candidate_office_state_full"`
	CandidatePrefix                    *string           `json:"candidate_prefix"`
	CandidateSuffix                    *string           `json:"candidate_suffix"`
	CategoryCode                       *string           `json:"category_code"`
	CategoryCodeFull                   *string           `json:"category_code_full"`
	CommDt                             *time.Time        `json:"comm_dt"`
	Committee                          *CommitteeHistory `json:"committee"`
	CommitteeID                        *string           `json:"committee_id"`
	ConduitCommitteeCity               *string           `json:"conduit_committee_city"`
	ConduitCommitteeName               *string           `json:"conduit_committee_name"`
	ConduitCommitteeState              *string           `json:"conduit_committee_state"`
	ConduitCommitteeStreet1            *string           `json:"conduit_committee_street1"`
	ConduitCommitteeStreet2            *string           `json:"conduit_committee_street2"`
	ConduitCommitteeZip                *int32            `json:"conduit_committee_zip"`
	DisbursementAmount                 *float64          `json:"disbursement_amount"`
	DisbursementDate                   *time.Time        `json:"disbursement_date"`
	DisbursementDescription            *string           `json:"disbursement_description"`
	DisbursementPurposeCategory        *string           `json:"disbursement_purpose_category"`
	DisbursementType                   *string           `json:"disbursement_type"`
	DisbursementTypeDescription        *string           `json:"disbursement_type_description"`
	ElectionType                       *string           `json:"election_type"`
	ElectionTypeFull                   *string           `json:"election_type_full"`
	EntityType                         *string           `json:"entity_type"`
	EntityTypeDesc                     *string           `json:"entity_type_desc"`
	FecElectionTypeDesc                *string           `json:"fec_election_type_desc"`
	FecElectionYear                    *string           `json:"fec_election_year"`
	FileNumber                         *int32            `json:"file_number"`
	FilingForm                         *string           `json:"filing_form"`
	ImageNumber                        *string           `json:"image_number"`
	LineNumber                         *string           `json:"line_number"`
	LineNumberLabel                    *string           `json:"line_number_label"`
	LinkID                             *int32            `json:"link_id"`
	LoadDate                           *time.Time        `json:"load_date"`
	MemoCode                           *string           `json:"memo_code"`
	MemoCodeFull                       *string           `json:"memo_code_full"`
	MemoText                           *string           `json:"memo_text"`
	MemoedSubtotal                     *bool             `json:"memoed_subtotal"`
	NationalCommitteeNonfederalAccount *string           `json:"national_committee_nonfederal_account"`
	OriginalSubID                      *string           `json:"original_sub_id"`
	PayeeEmployer                      *string           `json:"payee_employer"`
	PayeeFirstName                     *string           `json:"payee_first_name"`
	PayeeLastName                      *string           `json:"payee_last_name"`
	PayeeMiddleName                    *string           `json:"payee_middle_name"`
	PayeeOccupation                    *string           `json:"payee_occupation"`
	PayeePrefix                        *string           `json:"payee_prefix"`
	PayeeSuffix                        *string           `json:"payee_suffix"`
	PdfURL                             *string           `json:"pdf_url"`
	RecipientCity                      *string           `json:"recipient_city"`
	RecipientCommittee                 *CommitteeHistory `json:"recipient_committee"`
	RecipientCommitteeID               *string           `json:"recipient_committee_id"`
	RecipientName                      *string           `json:"recipient_name"`
	RecipientState                     *string           `json:"recipient_state"`
	RecipientZip                       *string           `json:"recipient_zip"`
	RefDispExcessFlg                   *string           `json:"ref_disp_excess_flg"`
	ReportType                         *string           `json:"report_type"`
	ReportYear                         *int32            `json:"report_year"`
	ScheduleType                       *string           `json:"schedule_type"`
	ScheduleTypeFull                   *string           `json:"schedule_type_full"`
	SemiAnnualBundledRefund            *float64          `json:"semi_annual_bundled_refund"`
	SpenderCommitteeDesignation        *string           `json:"spender_committee_designation"`
	SpenderCommitteeOrgType            *string           `json:"spender_committee_org_type"`
	SpenderCommitteeType               *string           `json:"spender_committee_type"`
	SubID                              *string           `json:"sub_id"`
	TransactionID                      *string           `json:"transaction_id"`
	TwoYearTransactionPeriod           *int32            `json:"two_year_transaction_period"`
	UnusedRecipientCommitteeID         *string           `json:"unused_recipient_committee_id"`
}
