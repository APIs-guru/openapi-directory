package shared

import (
"time")

type ElectionDate struct {
    ActiveElection *bool `json:"active_election,omitempty"`
    CreateDate *time.Time `json:"create_date,omitempty"`
    ElectionDate *time.Time `json:"election_date,omitempty"`
    ElectionDistrict *int32 `json:"election_district,omitempty"`
    ElectionNotes *string `json:"election_notes,omitempty"`
    ElectionParty *string `json:"election_party,omitempty"`
    ElectionState *string `json:"election_state,omitempty"`
    ElectionTypeFull *string `json:"election_type_full,omitempty"`
    ElectionTypeID *string `json:"election_type_id,omitempty"`
    ElectionYear *int32 `json:"election_year,omitempty"`
    OfficeSought *string `json:"office_sought,omitempty"`
    PrimaryGeneralDate *time.Time `json:"primary_general_date,omitempty"`
    UpdateDate *time.Time `json:"update_date,omitempty"`
    
}

