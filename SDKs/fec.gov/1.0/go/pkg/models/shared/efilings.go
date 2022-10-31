package shared

import (
"time")

type EFilings struct {
    AmendedBy *int32 `json:"amended_by,omitempty"`
    AmendmentChain []int32 `json:"amendment_chain,omitempty"`
    AmendmentNumber *int32 `json:"amendment_number,omitempty"`
    AmendsFile *int32 `json:"amends_file,omitempty"`
    BeginningImageNumber *string `json:"beginning_image_number,omitempty"`
    CommitteeID *string `json:"committee_id,omitempty"`
    CommitteeName *string `json:"committee_name,omitempty"`
    CoverageEndDate *time.Time `json:"coverage_end_date,omitempty"`
    CoverageStartDate *time.Time `json:"coverage_start_date,omitempty"`
    CsvURL *string `json:"csv_url,omitempty"`
    DocumentDescription *string `json:"document_description,omitempty"`
    EndingImageNumber *string `json:"ending_image_number,omitempty"`
    FecFileID *string `json:"fec_file_id,omitempty"`
    FecURL *string `json:"fec_url,omitempty"`
    FileNumber *int32 `json:"file_number,omitempty"`
    FiledDate *time.Time `json:"filed_date,omitempty"`
    FormType *string `json:"form_type,omitempty"`
    HTMLURL *string `json:"html_url,omitempty"`
    IsAmended *bool `json:"is_amended,omitempty"`
    LoadTimestamp *time.Time `json:"load_timestamp,omitempty"`
    MostRecent *bool `json:"most_recent,omitempty"`
    MostRecentFiling *int32 `json:"most_recent_filing,omitempty"`
    PdfURL *string `json:"pdf_url,omitempty"`
    ReceiptDate *time.Time `json:"receipt_date,omitempty"`
    
}

