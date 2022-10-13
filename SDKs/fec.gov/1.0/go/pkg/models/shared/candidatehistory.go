package shared

import (
	"time"
)

type CandidateHistory struct {
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
	Cycles                 []int32    `json:"cycles"`
	District               *string    `json:"district"`
	DistrictNumber         *int32     `json:"district_number"`
	ElectionDistricts      []string   `json:"election_districts"`
	ElectionYears          []int32    `json:"election_years"`
	FecCyclesInElection    []int32    `json:"fec_cycles_in_election"`
	FirstFileDate          *time.Time `json:"first_file_date"`
	Flags                  *string    `json:"flags"`
	IncumbentChallenge     *string    `json:"incumbent_challenge"`
	IncumbentChallengeFull *string    `json:"incumbent_challenge_full"`
	LastF2Date             *time.Time `json:"last_f2_date"`
	LastFileDate           *time.Time `json:"last_file_date"`
	LoadDate               *time.Time `json:"load_date"`
	Name                   *string    `json:"name"`
	Office                 *string    `json:"office"`
	OfficeFull             *string    `json:"office_full"`
	Party                  *string    `json:"party"`
	PartyFull              *string    `json:"party_full"`
	RoundedElectionYears   []int32    `json:"rounded_election_years"`
	State                  *string    `json:"state"`
	TwoYearPeriod          int32      `json:"two_year_period"`
}
