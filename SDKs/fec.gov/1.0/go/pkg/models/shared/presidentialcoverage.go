package shared

import (
	"time"
)

type PresidentialCoverage struct {
	CandidateID     *string    `json:"candidate_id,omitempty"`
	CoverageEndDate *time.Time `json:"coverage_end_date,omitempty"`
	ElectionYear    *int32     `json:"election_year,omitempty"`
}
