package shared

import (
"time")

type ScheduleE struct {
    ActionCode *string `json:"action_code,omitempty"`
    ActionCodeFull *string `json:"action_code_full,omitempty"`
    AmendmentIndicator *string `json:"amendment_indicator,omitempty"`
    AmendmentNumber *int32 `json:"amendment_number,omitempty"`
    BackReferenceScheduleName *string `json:"back_reference_schedule_name,omitempty"`
    BackReferenceTransactionID *string `json:"back_reference_transaction_id,omitempty"`
    Candidate *string `json:"candidate,omitempty"`
    CandidateFirstName *string `json:"candidate_first_name,omitempty"`
    CandidateID *string `json:"candidate_id,omitempty"`
    CandidateLastName *string `json:"candidate_last_name,omitempty"`
    CandidateMiddleName *string `json:"candidate_middle_name,omitempty"`
    CandidateName *string `json:"candidate_name,omitempty"`
    CandidateOffice *string `json:"candidate_office,omitempty"`
    CandidateOfficeDistrict *string `json:"candidate_office_district,omitempty"`
    CandidateOfficeState *string `json:"candidate_office_state,omitempty"`
    CandidateParty *string `json:"candidate_party,omitempty"`
    CandidatePrefix *string `json:"candidate_prefix,omitempty"`
    CandidateSuffix *string `json:"candidate_suffix,omitempty"`
    CategoryCode *string `json:"category_code,omitempty"`
    CategoryCodeFull *string `json:"category_code_full,omitempty"`
    Committee *CommitteeHistory `json:"committee,omitempty"`
    CommitteeID *string `json:"committee_id,omitempty"`
    ConduitCommitteeCity *string `json:"conduit_committee_city,omitempty"`
    ConduitCommitteeID *string `json:"conduit_committee_id,omitempty"`
    ConduitCommitteeName *string `json:"conduit_committee_name,omitempty"`
    ConduitCommitteeState *string `json:"conduit_committee_state,omitempty"`
    ConduitCommitteeStreet1 *string `json:"conduit_committee_street1,omitempty"`
    ConduitCommitteeStreet2 *string `json:"conduit_committee_street2,omitempty"`
    ConduitCommitteeZip *int32 `json:"conduit_committee_zip,omitempty"`
    DisseminationDate *time.Time `json:"dissemination_date,omitempty"`
    ElectionType *string `json:"election_type,omitempty"`
    ElectionTypeFull *string `json:"election_type_full,omitempty"`
    ExpenditureAmount *float64 `json:"expenditure_amount,omitempty"`
    ExpenditureDate *time.Time `json:"expenditure_date,omitempty"`
    ExpenditureDescription *string `json:"expenditure_description,omitempty"`
    FileNumber *int32 `json:"file_number,omitempty"`
    FilerFirstName *string `json:"filer_first_name,omitempty"`
    FilerLastName *string `json:"filer_last_name,omitempty"`
    FilerMiddleName *string `json:"filer_middle_name,omitempty"`
    FilerPrefix *string `json:"filer_prefix,omitempty"`
    FilerSuffix *string `json:"filer_suffix,omitempty"`
    FilingDate *time.Time `json:"filing_date,omitempty"`
    FilingForm *string `json:"filing_form,omitempty"`
    ImageNumber *string `json:"image_number,omitempty"`
    IndependentSignDate *time.Time `json:"independent_sign_date,omitempty"`
    IndependentSignName *string `json:"independent_sign_name,omitempty"`
    IsNotice *bool `json:"is_notice,omitempty"`
    LineNumber *string `json:"line_number,omitempty"`
    LinkID *int32 `json:"link_id,omitempty"`
    MemoCode *string `json:"memo_code,omitempty"`
    MemoCodeFull *string `json:"memo_code_full,omitempty"`
    MemoText *string `json:"memo_text,omitempty"`
    MemoedSubtotal *bool `json:"memoed_subtotal,omitempty"`
    MostRecent *bool `json:"most_recent,omitempty"`
    NotaryCommissionExpirationDate *time.Time `json:"notary_commission_expiration_date,omitempty"`
    NotarySignDate *time.Time `json:"notary_sign_date,omitempty"`
    NotarySignName *string `json:"notary_sign_name,omitempty"`
    OfficeTotalYtd *float64 `json:"office_total_ytd,omitempty"`
    OriginalSubID *string `json:"original_sub_id,omitempty"`
    PayeeCity *string `json:"payee_city,omitempty"`
    PayeeFirstName *string `json:"payee_first_name,omitempty"`
    PayeeLastName *string `json:"payee_last_name,omitempty"`
    PayeeMiddleName *string `json:"payee_middle_name,omitempty"`
    PayeeName *string `json:"payee_name,omitempty"`
    PayeePrefix *string `json:"payee_prefix,omitempty"`
    PayeeState *string `json:"payee_state,omitempty"`
    PayeeStreet1 *string `json:"payee_street_1,omitempty"`
    PayeeStreet2 *string `json:"payee_street_2,omitempty"`
    PayeeSuffix *string `json:"payee_suffix,omitempty"`
    PayeeZip *string `json:"payee_zip,omitempty"`
    PdfURL *string `json:"pdf_url,omitempty"`
    PreviousFileNumber *int32 `json:"previous_file_number,omitempty"`
    ReportType *string `json:"report_type,omitempty"`
    ReportYear *int32 `json:"report_year,omitempty"`
    ScheduleType *string `json:"schedule_type,omitempty"`
    ScheduleTypeFull *string `json:"schedule_type_full,omitempty"`
    SubID *string `json:"sub_id,omitempty"`
    SupportOpposeIndicator *string `json:"support_oppose_indicator,omitempty"`
    TransactionID *string `json:"transaction_id,omitempty"`
    
}

