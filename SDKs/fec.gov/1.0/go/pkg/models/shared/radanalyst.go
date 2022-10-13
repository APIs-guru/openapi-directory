package shared

import (
	"time"
)

type RadAnalyst struct {
	AnalystID            *float64   `json:"analyst_id"`
	AnalystShortID       *float64   `json:"analyst_short_id"`
	AssignmentUpdateDate *time.Time `json:"assignment_update_date"`
	CommitteeID          string     `json:"committee_id"`
	CommitteeName        *string    `json:"committee_name"`
	Email                *string    `json:"email"`
	FirstName            *string    `json:"first_name"`
	LastName             *string    `json:"last_name"`
	RadBranch            *string    `json:"rad_branch"`
	TelephoneExt         *float64   `json:"telephone_ext"`
	Title                *string    `json:"title"`
}
