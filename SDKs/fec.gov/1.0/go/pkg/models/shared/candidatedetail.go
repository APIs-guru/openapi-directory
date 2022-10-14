package shared

import (
	"time"
)

type CandidateDetail struct {
	ActiveThrough          *int32     `json:"active_through,omitempty"`
	AddressCity            *string    `json:"address_city,omitempty"`
	AddressState           *string    `json:"address_state,omitempty"`
	AddressStreet1         *string    `json:"address_street_1,omitempty"`
	AddressStreet2         *string    `json:"address_street_2,omitempty"`
	AddressZip             *string    `json:"address_zip,omitempty"`
	CandidateID            *string    `json:"candidate_id,omitempty"`
	CandidateInactive      *bool      `json:"candidate_inactive,omitempty"`
	CandidateStatus        *string    `json:"candidate_status,omitempty"`
	Cycles                 []int32    `json:"cycles,omitempty"`
	District               *string    `json:"district,omitempty"`
	DistrictNumber         *int32     `json:"district_number,omitempty"`
	ElectionDistricts      []string   `json:"election_districts,omitempty"`
	ElectionYears          []int32    `json:"election_years,omitempty"`
	FederalFundsFlag       *bool      `json:"federal_funds_flag,omitempty"`
	FirstFileDate          *time.Time `json:"first_file_date,omitempty"`
	Flags                  *string    `json:"flags,omitempty"`
	HasRaisedFunds         *bool      `json:"has_raised_funds,omitempty"`
	IncumbentChallenge     *string    `json:"incumbent_challenge,omitempty"`
	IncumbentChallengeFull *string    `json:"incumbent_challenge_full,omitempty"`
	LastF2Date             *time.Time `json:"last_f2_date,omitempty"`
	LastFileDate           *time.Time `json:"last_file_date,omitempty"`
	LoadDate               *time.Time `json:"load_date,omitempty"`
	Name                   *string    `json:"name,omitempty"`
	Office                 *string    `json:"office,omitempty"`
	OfficeFull             *string    `json:"office_full,omitempty"`
	Party                  *string    `json:"party,omitempty"`
	PartyFull              *string    `json:"party_full,omitempty"`
	State                  *string    `json:"state,omitempty"`
}
