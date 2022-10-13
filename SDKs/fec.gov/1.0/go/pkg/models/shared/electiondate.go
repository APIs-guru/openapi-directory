package shared

import (
	"time"
)

type ElectionDate struct {
	ActiveElection     *bool      `json:"active_election"`
	CreateDate         *time.Time `json:"create_date"`
	ElectionDate       *time.Time `json:"election_date"`
	ElectionDistrict   *int32     `json:"election_district"`
	ElectionNotes      *string    `json:"election_notes"`
	ElectionParty      *string    `json:"election_party"`
	ElectionState      *string    `json:"election_state"`
	ElectionTypeFull   *string    `json:"election_type_full"`
	ElectionTypeID     *string    `json:"election_type_id"`
	ElectionYear       *int32     `json:"election_year"`
	OfficeSought       *string    `json:"office_sought"`
	PrimaryGeneralDate *time.Time `json:"primary_general_date"`
	UpdateDate         *time.Time `json:"update_date"`
}
