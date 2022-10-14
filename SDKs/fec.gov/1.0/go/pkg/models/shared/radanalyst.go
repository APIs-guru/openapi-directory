package shared

import (
	"time"
)

type RadAnalyst struct {
	AnalystID            *float64   `json:"analyst_id,omitempty"`
	AnalystShortID       *float64   `json:"analyst_short_id,omitempty"`
	AssignmentUpdateDate *time.Time `json:"assignment_update_date,omitempty"`
	CommitteeID          string     `json:"committee_id"`
	CommitteeName        *string    `json:"committee_name,omitempty"`
	Email                *string    `json:"email,omitempty"`
	FirstName            *string    `json:"first_name,omitempty"`
	LastName             *string    `json:"last_name,omitempty"`
	RadBranch            *string    `json:"rad_branch,omitempty"`
	TelephoneExt         *float64   `json:"telephone_ext,omitempty"`
	Title                *string    `json:"title,omitempty"`
}
