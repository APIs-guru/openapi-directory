package shared

import (
	"time"
)

type CandidateHistoryTotal struct {
	ActiveThrough          *int32     `json:"active_through"`
	AddressCity            *string    `json:"address_city"`
	AddressState           *string    `json:"address_state"`
	AddressStreet1         *string    `json:"address_street_1"`
	AddressStreet2         *string    `json:"address_street_2"`
	AddressZip             *string    `json:"address_zip"`
	CandidateElectionYear  *int32     `json:"candidate_election_year"`
	CandidateID            string     `json:"candidate_id"`
	CandidateInactive      *bool      `json:"candidate_inactive"`
	CandidateStatus        *string    `json:"candidate_status"`
	CashOnHandEndPeriod    *float64   `json:"cash_on_hand_end_period"`
	CoverageEndDate        *time.Time `json:"coverage_end_date"`
	CoverageStartDate      *time.Time `json:"coverage_start_date"`
	Cycle                  int32      `json:"cycle"`
	Cycles                 []int32    `json:"cycles"`
	DebtsOwedByCommittee   *float64   `json:"debts_owed_by_committee"`
	Disbursements          *float64   `json:"disbursements"`
	District               *string    `json:"district"`
	DistrictNumber         *int32     `json:"district_number"`
	ElectionDistricts      []string   `json:"election_districts"`
	ElectionYear           *int32     `json:"election_year"`
	ElectionYears          []int32    `json:"election_years"`
	FecCyclesInElection    []int32    `json:"fec_cycles_in_election"`
	FederalFundsFlag       *bool      `json:"federal_funds_flag"`
	FirstFileDate          *time.Time `json:"first_file_date"`
	Flags                  *string    `json:"flags"`
	HasRaisedFunds         *bool      `json:"has_raised_funds"`
	IncumbentChallenge     *string    `json:"incumbent_challenge"`
	IncumbentChallengeFull *string    `json:"incumbent_challenge_full"`
	IsElection             bool       `json:"is_election"`
	LastF2Date             *time.Time `json:"last_f2_date"`
	LastFileDate           *time.Time `json:"last_file_date"`
	LoadDate               *time.Time `json:"load_date"`
	Name                   *string    `json:"name"`
	Office                 *string    `json:"office"`
	OfficeFull             *string    `json:"office_full"`
	Party                  *string    `json:"party"`
	PartyFull              *string    `json:"party_full"`
	Receipts               *float64   `json:"receipts"`
	RoundedElectionYears   []int32    `json:"rounded_election_years"`
	State                  *string    `json:"state"`
	TwoYearPeriod          int32      `json:"two_year_period"`
}
