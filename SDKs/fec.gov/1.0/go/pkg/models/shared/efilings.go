package shared

import (
	"time"
)

type EFilings struct {
	AmendedBy            *int32     `json:"amended_by"`
	AmendmentChain       []int32    `json:"amendment_chain"`
	AmendmentNumber      *int32     `json:"amendment_number"`
	AmendsFile           *int32     `json:"amends_file"`
	BeginningImageNumber *string    `json:"beginning_image_number"`
	CommitteeID          *string    `json:"committee_id"`
	CommitteeName        *string    `json:"committee_name"`
	CoverageEndDate      *time.Time `json:"coverage_end_date"`
	CoverageStartDate    *time.Time `json:"coverage_start_date"`
	CsvURL               *string    `json:"csv_url"`
	DocumentDescription  *string    `json:"document_description"`
	EndingImageNumber    *string    `json:"ending_image_number"`
	FecFileID            *string    `json:"fec_file_id"`
	FecURL               *string    `json:"fec_url"`
	FileNumber           *int32     `json:"file_number"`
	FiledDate            *time.Time `json:"filed_date"`
	FormType             *string    `json:"form_type"`
	HTMLURL              *string    `json:"html_url"`
	IsAmended            *bool      `json:"is_amended"`
	LoadTimestamp        *time.Time `json:"load_timestamp"`
	MostRecent           *bool      `json:"most_recent"`
	MostRecentFiling     *int32     `json:"most_recent_filing"`
	PdfURL               *string    `json:"pdf_url"`
	ReceiptDate          *time.Time `json:"receipt_date"`
}
