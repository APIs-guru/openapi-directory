package shared

import (
	"time"
)

type BaseF3Filing struct {
	AmendedAddress            *string    `json:"amended_address"`
	AmendedBy                 *int32     `json:"amended_by"`
	Amendment                 *string    `json:"amendment"`
	AmendmentChain            []int32    `json:"amendment_chain"`
	BeginningImageNumber      *string    `json:"beginning_image_number"`
	CandidateFirstName        *string    `json:"candidate_first_name"`
	CandidateID               *string    `json:"candidate_id"`
	CandidateLastName         *string    `json:"candidate_last_name"`
	CandidateMiddleName       *string    `json:"candidate_middle_name"`
	CandidateName             *string    `json:"candidate_name"`
	CandidatePrefix           *string    `json:"candidate_prefix"`
	CandidateSuffix           *string    `json:"candidate_suffix"`
	CashOnHandBeginningPeriod *int32     `json:"cash_on_hand_beginning_period"`
	City                      *string    `json:"city"`
	CommitteeID               *string    `json:"committee_id"`
	CommitteeName             *string    `json:"committee_name"`
	CoverageEndDate           *time.Time `json:"coverage_end_date"`
	CoverageStartDate         *time.Time `json:"coverage_start_date"`
	CsvURL                    *string    `json:"csv_url"`
	District                  *int32     `json:"district"`
	DocumentDescription       *string    `json:"document_description"`
	ElectionDate              *time.Time `json:"election_date"`
	ElectionState             *string    `json:"election_state"`
	F3z1                      *int32     `json:"f3z1"`
	FecFileID                 *string    `json:"fec_file_id"`
	FecURL                    *string    `json:"fec_url"`
	FileNumber                *int32     `json:"file_number"`
	GeneralElection           *string    `json:"general_election"`
	IsAmended                 *bool      `json:"is_amended"`
	MostRecent                *bool      `json:"most_recent"`
	MostRecentFiling          *int32     `json:"most_recent_filing"`
	PdfURL                    *string    `json:"pdf_url"`
	Prefix                    *string    `json:"prefix"`
	PrimaryElection           *string    `json:"primary_election"`
	ReceiptDate               *time.Time `json:"receipt_date"`
	Report                    *string    `json:"report"`
	ReportType                *string    `json:"report_type"`
	ReportYear                *int32     `json:"report_year"`
	RptPgi                    *string    `json:"rpt_pgi"`
	RunoffElection            *string    `json:"runoff_election"`
	SignDate                  *time.Time `json:"sign_date"`
	SpecialElection           *string    `json:"special_election"`
	State                     *string    `json:"state"`
	Street1                   *string    `json:"street_1"`
	Street2                   *string    `json:"street_2"`
	Suffix                    *string    `json:"suffix"`
	SummaryLines              *string    `json:"summary_lines"`
	TreasurerFirstName        *string    `json:"treasurer_first_name"`
	TreasurerLastName         *string    `json:"treasurer_last_name"`
	TreasurerMiddleName       *string    `json:"treasurer_middle_name"`
	TreasurerName             *string    `json:"treasurer_name"`
	Zip                       *string    `json:"zip"`
}
