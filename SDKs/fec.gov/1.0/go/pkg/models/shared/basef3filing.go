package shared

import (
"time")

type BaseF3Filing struct {
    AmendedAddress *string `json:"amended_address,omitempty"`
    AmendedBy *int32 `json:"amended_by,omitempty"`
    Amendment *string `json:"amendment,omitempty"`
    AmendmentChain []int32 `json:"amendment_chain,omitempty"`
    BeginningImageNumber *string `json:"beginning_image_number,omitempty"`
    CandidateFirstName *string `json:"candidate_first_name,omitempty"`
    CandidateID *string `json:"candidate_id,omitempty"`
    CandidateLastName *string `json:"candidate_last_name,omitempty"`
    CandidateMiddleName *string `json:"candidate_middle_name,omitempty"`
    CandidateName *string `json:"candidate_name,omitempty"`
    CandidatePrefix *string `json:"candidate_prefix,omitempty"`
    CandidateSuffix *string `json:"candidate_suffix,omitempty"`
    CashOnHandBeginningPeriod *int32 `json:"cash_on_hand_beginning_period,omitempty"`
    City *string `json:"city,omitempty"`
    CommitteeID *string `json:"committee_id,omitempty"`
    CommitteeName *string `json:"committee_name,omitempty"`
    CoverageEndDate *time.Time `json:"coverage_end_date,omitempty"`
    CoverageStartDate *time.Time `json:"coverage_start_date,omitempty"`
    CsvURL *string `json:"csv_url,omitempty"`
    District *int32 `json:"district,omitempty"`
    DocumentDescription *string `json:"document_description,omitempty"`
    ElectionDate *time.Time `json:"election_date,omitempty"`
    ElectionState *string `json:"election_state,omitempty"`
    F3z1 *int32 `json:"f3z1,omitempty"`
    FecFileID *string `json:"fec_file_id,omitempty"`
    FecURL *string `json:"fec_url,omitempty"`
    FileNumber *int32 `json:"file_number,omitempty"`
    GeneralElection *string `json:"general_election,omitempty"`
    IsAmended *bool `json:"is_amended,omitempty"`
    MostRecent *bool `json:"most_recent,omitempty"`
    MostRecentFiling *int32 `json:"most_recent_filing,omitempty"`
    PdfURL *string `json:"pdf_url,omitempty"`
    Prefix *string `json:"prefix,omitempty"`
    PrimaryElection *string `json:"primary_election,omitempty"`
    ReceiptDate *time.Time `json:"receipt_date,omitempty"`
    Report *string `json:"report,omitempty"`
    ReportType *string `json:"report_type,omitempty"`
    ReportYear *int32 `json:"report_year,omitempty"`
    RptPgi *string `json:"rpt_pgi,omitempty"`
    RunoffElection *string `json:"runoff_election,omitempty"`
    SignDate *time.Time `json:"sign_date,omitempty"`
    SpecialElection *string `json:"special_election,omitempty"`
    State *string `json:"state,omitempty"`
    Street1 *string `json:"street_1,omitempty"`
    Street2 *string `json:"street_2,omitempty"`
    Suffix *string `json:"suffix,omitempty"`
    SummaryLines *string `json:"summary_lines,omitempty"`
    TreasurerFirstName *string `json:"treasurer_first_name,omitempty"`
    TreasurerLastName *string `json:"treasurer_last_name,omitempty"`
    TreasurerMiddleName *string `json:"treasurer_middle_name,omitempty"`
    TreasurerName *string `json:"treasurer_name,omitempty"`
    Zip *string `json:"zip,omitempty"`
    
}

