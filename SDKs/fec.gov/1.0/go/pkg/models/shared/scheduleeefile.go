package shared

import (
"time")

type ScheduleEEfile struct {
    AmendmentIndicator *string `json:"amendment_indicator,omitempty"`
    BackReferenceScheduleName *string `json:"back_reference_schedule_name,omitempty"`
    BackReferenceTransactionID *string `json:"back_reference_transaction_id,omitempty"`
    BeginningImageNumber *string `json:"beginning_image_number,omitempty"`
    CandidateFirstName *string `json:"candidate_first_name,omitempty"`
    CandidateID *string `json:"candidate_id,omitempty"`
    CandidateMiddleName *string `json:"candidate_middle_name,omitempty"`
    CandidateName *string `json:"candidate_name,omitempty"`
    CandidateOffice *string `json:"candidate_office,omitempty"`
    CandidateOfficeDistrict *string `json:"candidate_office_district,omitempty"`
    CandidateOfficeState *string `json:"candidate_office_state,omitempty"`
    CandidateParty *string `json:"candidate_party,omitempty"`
    CandidatePrefix *string `json:"candidate_prefix,omitempty"`
    CandidateSuffix *string `json:"candidate_suffix,omitempty"`
    CategoryCode *string `json:"category_code,omitempty"`
    Committee *CommitteeHistory `json:"committee,omitempty"`
    CommitteeID *string `json:"committee_id,omitempty"`
    CsvURL *string `json:"csv_url,omitempty"`
    DisseminationDate *time.Time `json:"dissemination_date,omitempty"`
    EntityType *string `json:"entity_type,omitempty"`
    ExpenditureAmount *int32 `json:"expenditure_amount,omitempty"`
    ExpenditureDate *time.Time `json:"expenditure_date,omitempty"`
    ExpenditureDescription *string `json:"expenditure_description,omitempty"`
    FecURL *string `json:"fec_url,omitempty"`
    FileNumber int32 `json:"file_number"`
    FilerFirstName *string `json:"filer_first_name,omitempty"`
    FilerLastName *string `json:"filer_last_name,omitempty"`
    FilerMiddleName *string `json:"filer_middle_name,omitempty"`
    FilerPrefix *string `json:"filer_prefix,omitempty"`
    FilerSuffix *string `json:"filer_suffix,omitempty"`
    Filing *EFilings `json:"filing,omitempty"`
    FilingForm *string `json:"filing_form,omitempty"`
    ImageNumber *string `json:"image_number,omitempty"`
    IsNotice *bool `json:"is_notice,omitempty"`
    LineNumber *string `json:"line_number,omitempty"`
    LoadTimestamp *time.Time `json:"load_timestamp,omitempty"`
    MemoCode *string `json:"memo_code,omitempty"`
    MemoText *string `json:"memo_text,omitempty"`
    MostRecent *bool `json:"most_recent,omitempty"`
    NotarySignDate *time.Time `json:"notary_sign_date,omitempty"`
    OfficeTotalYtd *float32 `json:"office_total_ytd,omitempty"`
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
    RelatedLineNumber int32 `json:"related_line_number"`
    ReportType *string `json:"report_type,omitempty"`
    SupportOpposeIndicator *string `json:"support_oppose_indicator,omitempty"`
    TransactionID *string `json:"transaction_id,omitempty"`
    
}

