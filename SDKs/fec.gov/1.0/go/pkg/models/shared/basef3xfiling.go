package shared

import (
	"time"
)

type BaseF3XFiling struct {
	AmendAddress                     *string    `json:"amend_address"`
	AmendedBy                        *int32     `json:"amended_by"`
	Amendment                        *string    `json:"amendment"`
	AmendmentChain                   []int32    `json:"amendment_chain"`
	BeginningImageNumber             *string    `json:"beginning_image_number"`
	City                             *string    `json:"city"`
	CommitteeID                      *string    `json:"committee_id"`
	CommitteeName                    *string    `json:"committee_name"`
	CoverageEndDate                  *time.Time `json:"coverage_end_date"`
	CoverageStartDate                *time.Time `json:"coverage_start_date"`
	CsvURL                           *string    `json:"csv_url"`
	DocumentDescription              *string    `json:"document_description"`
	ElectionDate                     *time.Time `json:"election_date"`
	ElectionState                    *string    `json:"election_state"`
	FecFileID                        *string    `json:"fec_file_id"`
	FecURL                           *string    `json:"fec_url"`
	FileNumber                       *int32     `json:"file_number"`
	IsAmended                        *bool      `json:"is_amended"`
	MostRecent                       *bool      `json:"most_recent"`
	MostRecentFiling                 *int32     `json:"most_recent_filing"`
	PdfURL                           *string    `json:"pdf_url"`
	QualifiedMulticandidateCommittee *string    `json:"qualified_multicandidate_committee"`
	ReceiptDate                      *time.Time `json:"receipt_date"`
	Report                           *string    `json:"report"`
	ReportType                       *string    `json:"report_type"`
	ReportYear                       *int32     `json:"report_year"`
	RptPgi                           *string    `json:"rpt_pgi"`
	SignDate                         *time.Time `json:"sign_date"`
	State                            *string    `json:"state"`
	Street1                          *string    `json:"street_1"`
	Street2                          *string    `json:"street_2"`
	SummaryLines                     *string    `json:"summary_lines"`
	Zip                              *string    `json:"zip"`
}
