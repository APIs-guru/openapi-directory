package shared

import (
	"time"
)

type PresidentialCoverage struct {
	CandidateID     *string    `json:"candidate_id"`
	CoverageEndDate *time.Time `json:"coverage_end_date"`
	ElectionYear    *int32     `json:"election_year"`
}
