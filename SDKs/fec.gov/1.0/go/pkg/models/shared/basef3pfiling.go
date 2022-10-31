package shared

import (
"time")

type BaseF3PFiling struct {
    AmendedBy *int32 `json:"amended_by,omitempty"`
    Amendment *string `json:"amendment,omitempty"`
    AmendmentChain []int32 `json:"amendment_chain,omitempty"`
    BeginningImageNumber *string `json:"beginning_image_number,omitempty"`
    CashOnHandBeginningPeriod *float32 `json:"cash_on_hand_beginning_period,omitempty"`
    CashOnHandEndPeriod *float32 `json:"cash_on_hand_end_period,omitempty"`
    City *string `json:"city,omitempty"`
    CommitteeID *string `json:"committee_id,omitempty"`
    CommitteeName *string `json:"committee_name,omitempty"`
    CoverageEndDate *time.Time `json:"coverage_end_date,omitempty"`
    CoverageStartDate *time.Time `json:"coverage_start_date,omitempty"`
    CsvURL *string `json:"csv_url,omitempty"`
    DebtsOwedByCommittee *float32 `json:"debts_owed_by_committee,omitempty"`
    DebtsOwedToCommittee *float32 `json:"debts_owed_to_committee,omitempty"`
    DocumentDescription *string `json:"document_description,omitempty"`
    ElectionDate *time.Time `json:"election_date,omitempty"`
    ElectionState *string `json:"election_state,omitempty"`
    ExpenditureSubjectToLimits *float32 `json:"expenditure_subject_to_limits,omitempty"`
    FecFileID *string `json:"fec_file_id,omitempty"`
    FecURL *string `json:"fec_url,omitempty"`
    FileNumber *int32 `json:"file_number,omitempty"`
    GeneralElection *string `json:"general_election,omitempty"`
    IsAmended *bool `json:"is_amended,omitempty"`
    MostRecent *bool `json:"most_recent,omitempty"`
    MostRecentFiling *int32 `json:"most_recent_filing,omitempty"`
    NetContributionsCycleToDate *float32 `json:"net_contributions_cycle_to_date,omitempty"`
    NetOperatingExpendituresCycleToDate *float32 `json:"net_operating_expenditures_cycle_to_date,omitempty"`
    PdfURL *string `json:"pdf_url,omitempty"`
    Prefix *string `json:"prefix,omitempty"`
    PrimaryElection *string `json:"primary_election,omitempty"`
    ReceiptDate *time.Time `json:"receipt_date,omitempty"`
    Report *string `json:"report,omitempty"`
    ReportType *string `json:"report_type,omitempty"`
    ReportYear *int32 `json:"report_year,omitempty"`
    RptPgi *string `json:"rpt_pgi,omitempty"`
    SignDate *time.Time `json:"sign_date,omitempty"`
    State *string `json:"state,omitempty"`
    Street1 *string `json:"street_1,omitempty"`
    Street2 *string `json:"street_2,omitempty"`
    SubtotalSummaryPeriod *string `json:"subtotal_summary_period,omitempty"`
    Suffix *string `json:"suffix,omitempty"`
    SummaryLines *string `json:"summary_lines,omitempty"`
    TreasurerFirstName *string `json:"treasurer_first_name,omitempty"`
    TreasurerLastName *string `json:"treasurer_last_name,omitempty"`
    TreasurerMiddleName *string `json:"treasurer_middle_name,omitempty"`
    TreasurerName *string `json:"treasurer_name,omitempty"`
    Zip *string `json:"zip,omitempty"`
    
}

