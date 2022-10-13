package shared

import (
	"time"
)

type BaseF3PFiling struct {
	AmendedBy                           *int32     `json:"amended_by"`
	Amendment                           *string    `json:"amendment"`
	AmendmentChain                      []int32    `json:"amendment_chain"`
	BeginningImageNumber                *string    `json:"beginning_image_number"`
	CashOnHandBeginningPeriod           *float32   `json:"cash_on_hand_beginning_period"`
	CashOnHandEndPeriod                 *float32   `json:"cash_on_hand_end_period"`
	City                                *string    `json:"city"`
	CommitteeID                         *string    `json:"committee_id"`
	CommitteeName                       *string    `json:"committee_name"`
	CoverageEndDate                     *time.Time `json:"coverage_end_date"`
	CoverageStartDate                   *time.Time `json:"coverage_start_date"`
	CsvURL                              *string    `json:"csv_url"`
	DebtsOwedByCommittee                *float32   `json:"debts_owed_by_committee"`
	DebtsOwedToCommittee                *float32   `json:"debts_owed_to_committee"`
	DocumentDescription                 *string    `json:"document_description"`
	ElectionDate                        *time.Time `json:"election_date"`
	ElectionState                       *string    `json:"election_state"`
	ExpenditureSubjectToLimits          *float32   `json:"expenditure_subject_to_limits"`
	FecFileID                           *string    `json:"fec_file_id"`
	FecURL                              *string    `json:"fec_url"`
	FileNumber                          *int32     `json:"file_number"`
	GeneralElection                     *string    `json:"general_election"`
	IsAmended                           *bool      `json:"is_amended"`
	MostRecent                          *bool      `json:"most_recent"`
	MostRecentFiling                    *int32     `json:"most_recent_filing"`
	NetContributionsCycleToDate         *float32   `json:"net_contributions_cycle_to_date"`
	NetOperatingExpendituresCycleToDate *float32   `json:"net_operating_expenditures_cycle_to_date"`
	PdfURL                              *string    `json:"pdf_url"`
	Prefix                              *string    `json:"prefix"`
	PrimaryElection                     *string    `json:"primary_election"`
	ReceiptDate                         *time.Time `json:"receipt_date"`
	Report                              *string    `json:"report"`
	ReportType                          *string    `json:"report_type"`
	ReportYear                          *int32     `json:"report_year"`
	RptPgi                              *string    `json:"rpt_pgi"`
	SignDate                            *time.Time `json:"sign_date"`
	State                               *string    `json:"state"`
	Street1                             *string    `json:"street_1"`
	Street2                             *string    `json:"street_2"`
	SubtotalSummaryPeriod               *string    `json:"subtotal_summary_period"`
	Suffix                              *string    `json:"suffix"`
	SummaryLines                        *string    `json:"summary_lines"`
	TreasurerFirstName                  *string    `json:"treasurer_first_name"`
	TreasurerLastName                   *string    `json:"treasurer_last_name"`
	TreasurerMiddleName                 *string    `json:"treasurer_middle_name"`
	TreasurerName                       *string    `json:"treasurer_name"`
	Zip                                 *string    `json:"zip"`
}
