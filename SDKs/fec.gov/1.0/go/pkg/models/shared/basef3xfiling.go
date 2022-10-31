package shared

import (
"time")

type BaseF3XFiling struct {
    AmendAddress *string `json:"amend_address,omitempty"`
    AmendedBy *int32 `json:"amended_by,omitempty"`
    Amendment *string `json:"amendment,omitempty"`
    AmendmentChain []int32 `json:"amendment_chain,omitempty"`
    BeginningImageNumber *string `json:"beginning_image_number,omitempty"`
    City *string `json:"city,omitempty"`
    CommitteeID *string `json:"committee_id,omitempty"`
    CommitteeName *string `json:"committee_name,omitempty"`
    CoverageEndDate *time.Time `json:"coverage_end_date,omitempty"`
    CoverageStartDate *time.Time `json:"coverage_start_date,omitempty"`
    CsvURL *string `json:"csv_url,omitempty"`
    DocumentDescription *string `json:"document_description,omitempty"`
    ElectionDate *time.Time `json:"election_date,omitempty"`
    ElectionState *string `json:"election_state,omitempty"`
    FecFileID *string `json:"fec_file_id,omitempty"`
    FecURL *string `json:"fec_url,omitempty"`
    FileNumber *int32 `json:"file_number,omitempty"`
    IsAmended *bool `json:"is_amended,omitempty"`
    MostRecent *bool `json:"most_recent,omitempty"`
    MostRecentFiling *int32 `json:"most_recent_filing,omitempty"`
    PdfURL *string `json:"pdf_url,omitempty"`
    QualifiedMulticandidateCommittee *string `json:"qualified_multicandidate_committee,omitempty"`
    ReceiptDate *time.Time `json:"receipt_date,omitempty"`
    Report *string `json:"report,omitempty"`
    ReportType *string `json:"report_type,omitempty"`
    ReportYear *int32 `json:"report_year,omitempty"`
    RptPgi *string `json:"rpt_pgi,omitempty"`
    SignDate *time.Time `json:"sign_date,omitempty"`
    State *string `json:"state,omitempty"`
    Street1 *string `json:"street_1,omitempty"`
    Street2 *string `json:"street_2,omitempty"`
    SummaryLines *string `json:"summary_lines,omitempty"`
    Zip *string `json:"zip,omitempty"`
    
}

