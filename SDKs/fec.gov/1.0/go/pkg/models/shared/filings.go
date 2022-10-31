package shared

import (
"time")

type Filings struct {
    AdditionalBankNames []string `json:"additional_bank_names,omitempty"`
    AmendmentChain []float64 `json:"amendment_chain,omitempty"`
    AmendmentIndicator *string `json:"amendment_indicator,omitempty"`
    AmendmentVersion *int32 `json:"amendment_version,omitempty"`
    BankDepositoryCity *string `json:"bank_depository_city,omitempty"`
    BankDepositoryName *string `json:"bank_depository_name,omitempty"`
    BankDepositoryState *string `json:"bank_depository_state,omitempty"`
    BankDepositoryStreet1 *string `json:"bank_depository_street_1,omitempty"`
    BankDepositoryStreet2 *string `json:"bank_depository_street_2,omitempty"`
    BankDepositoryZip *string `json:"bank_depository_zip,omitempty"`
    BeginningImageNumber *string `json:"beginning_image_number,omitempty"`
    CandidateID *string `json:"candidate_id,omitempty"`
    CandidateName *string `json:"candidate_name,omitempty"`
    CashOnHandBeginningPeriod *float64 `json:"cash_on_hand_beginning_period,omitempty"`
    CashOnHandEndPeriod *float64 `json:"cash_on_hand_end_period,omitempty"`
    CommitteeID *string `json:"committee_id,omitempty"`
    CommitteeName *string `json:"committee_name,omitempty"`
    CommitteeType *string `json:"committee_type,omitempty"`
    CoverageEndDate *time.Time `json:"coverage_end_date,omitempty"`
    CoverageStartDate *time.Time `json:"coverage_start_date,omitempty"`
    CsvURL *string `json:"csv_url,omitempty"`
    Cycle *int32 `json:"cycle,omitempty"`
    DebtsOwedByCommittee *float64 `json:"debts_owed_by_committee,omitempty"`
    DebtsOwedToCommittee *float64 `json:"debts_owed_to_committee,omitempty"`
    DocumentDescription *string `json:"document_description,omitempty"`
    DocumentType *string `json:"document_type,omitempty"`
    DocumentTypeFull *string `json:"document_type_full,omitempty"`
    ElectionYear *int32 `json:"election_year,omitempty"`
    EndingImageNumber *string `json:"ending_image_number,omitempty"`
    FecFileID *string `json:"fec_file_id,omitempty"`
    FecURL *string `json:"fec_url,omitempty"`
    FileNumber *int32 `json:"file_number,omitempty"`
    FormCategory *string `json:"form_category,omitempty"`
    FormType *string `json:"form_type,omitempty"`
    HousePersonalFunds *float64 `json:"house_personal_funds,omitempty"`
    HTMLURL *string `json:"html_url,omitempty"`
    IsAmended *bool `json:"is_amended,omitempty"`
    MeansFiled *string `json:"means_filed,omitempty"`
    MostRecent *bool `json:"most_recent,omitempty"`
    MostRecentFileNumber *int32 `json:"most_recent_file_number,omitempty"`
    NetDonations *float64 `json:"net_donations,omitempty"`
    Office *string `json:"office,omitempty"`
    OppositionPersonalFunds *float64 `json:"opposition_personal_funds,omitempty"`
    Pages *int32 `json:"pages,omitempty"`
    Party *string `json:"party,omitempty"`
    PdfURL *string `json:"pdf_url,omitempty"`
    PreviousFileNumber *int32 `json:"previous_file_number,omitempty"`
    PrimaryGeneralIndicator *string `json:"primary_general_indicator,omitempty"`
    ReceiptDate *time.Time `json:"receipt_date,omitempty"`
    ReportType *string `json:"report_type,omitempty"`
    ReportTypeFull *string `json:"report_type_full,omitempty"`
    ReportYear *int32 `json:"report_year,omitempty"`
    RequestType *string `json:"request_type,omitempty"`
    SenatePersonalFunds *float64 `json:"senate_personal_funds,omitempty"`
    State *string `json:"state,omitempty"`
    SubID *string `json:"sub_id,omitempty"`
    TotalCommunicationCost *float64 `json:"total_communication_cost,omitempty"`
    TotalDisbursements *float64 `json:"total_disbursements,omitempty"`
    TotalIndependentExpenditures *float64 `json:"total_independent_expenditures,omitempty"`
    TotalIndividualContributions *float64 `json:"total_individual_contributions,omitempty"`
    TotalReceipts *float64 `json:"total_receipts,omitempty"`
    TreasurerName *string `json:"treasurer_name,omitempty"`
    UpdateDate *time.Time `json:"update_date,omitempty"`
    
}

