package shared

import (
	"time"
)

type Filings struct {
	AdditionalBankNames          []string   `json:"additional_bank_names"`
	AmendmentChain               []float64  `json:"amendment_chain"`
	AmendmentIndicator           *string    `json:"amendment_indicator"`
	AmendmentVersion             *int32     `json:"amendment_version"`
	BankDepositoryCity           *string    `json:"bank_depository_city"`
	BankDepositoryName           *string    `json:"bank_depository_name"`
	BankDepositoryState          *string    `json:"bank_depository_state"`
	BankDepositoryStreet1        *string    `json:"bank_depository_street_1"`
	BankDepositoryStreet2        *string    `json:"bank_depository_street_2"`
	BankDepositoryZip            *string    `json:"bank_depository_zip"`
	BeginningImageNumber         *string    `json:"beginning_image_number"`
	CandidateID                  *string    `json:"candidate_id"`
	CandidateName                *string    `json:"candidate_name"`
	CashOnHandBeginningPeriod    *float64   `json:"cash_on_hand_beginning_period"`
	CashOnHandEndPeriod          *float64   `json:"cash_on_hand_end_period"`
	CommitteeID                  *string    `json:"committee_id"`
	CommitteeName                *string    `json:"committee_name"`
	CommitteeType                *string    `json:"committee_type"`
	CoverageEndDate              *time.Time `json:"coverage_end_date"`
	CoverageStartDate            *time.Time `json:"coverage_start_date"`
	CsvURL                       *string    `json:"csv_url"`
	Cycle                        *int32     `json:"cycle"`
	DebtsOwedByCommittee         *float64   `json:"debts_owed_by_committee"`
	DebtsOwedToCommittee         *float64   `json:"debts_owed_to_committee"`
	DocumentDescription          *string    `json:"document_description"`
	DocumentType                 *string    `json:"document_type"`
	DocumentTypeFull             *string    `json:"document_type_full"`
	ElectionYear                 *int32     `json:"election_year"`
	EndingImageNumber            *string    `json:"ending_image_number"`
	FecFileID                    *string    `json:"fec_file_id"`
	FecURL                       *string    `json:"fec_url"`
	FileNumber                   *int32     `json:"file_number"`
	FormCategory                 *string    `json:"form_category"`
	FormType                     *string    `json:"form_type"`
	HousePersonalFunds           *float64   `json:"house_personal_funds"`
	HTMLURL                      *string    `json:"html_url"`
	IsAmended                    *bool      `json:"is_amended"`
	MeansFiled                   *string    `json:"means_filed"`
	MostRecent                   *bool      `json:"most_recent"`
	MostRecentFileNumber         *int32     `json:"most_recent_file_number"`
	NetDonations                 *float64   `json:"net_donations"`
	Office                       *string    `json:"office"`
	OppositionPersonalFunds      *float64   `json:"opposition_personal_funds"`
	Pages                        *int32     `json:"pages"`
	Party                        *string    `json:"party"`
	PdfURL                       *string    `json:"pdf_url"`
	PreviousFileNumber           *int32     `json:"previous_file_number"`
	PrimaryGeneralIndicator      *string    `json:"primary_general_indicator"`
	ReceiptDate                  *time.Time `json:"receipt_date"`
	ReportType                   *string    `json:"report_type"`
	ReportTypeFull               *string    `json:"report_type_full"`
	ReportYear                   *int32     `json:"report_year"`
	RequestType                  *string    `json:"request_type"`
	SenatePersonalFunds          *float64   `json:"senate_personal_funds"`
	State                        *string    `json:"state"`
	SubID                        *string    `json:"sub_id"`
	TotalCommunicationCost       *float64   `json:"total_communication_cost"`
	TotalDisbursements           *float64   `json:"total_disbursements"`
	TotalIndependentExpenditures *float64   `json:"total_independent_expenditures"`
	TotalIndividualContributions *float64   `json:"total_individual_contributions"`
	TotalReceipts                *float64   `json:"total_receipts"`
	TreasurerName                *string    `json:"treasurer_name"`
	UpdateDate                   *time.Time `json:"update_date"`
}
