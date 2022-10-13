package shared

import (
	"time"
)

type GeneralStats struct {
	CasesWithOutcome             int64      `json:"cases_with_outcome"`
	CreatedAt                    *time.Time `json:"created_at"`
	CriticalConditionActiveCases int64      `json:"critical_condition_active_cases"`
	CurrentlyInfected            int64      `json:"currently_infected"`
	DeathCases                   int64      `json:"death_cases"`
	DeathClosedCases             int64      `json:"death_closed_cases"`
	Deleted                      *bool      `json:"deleted"`
	ID                           *string    `json:"id"`
	LastUpdate                   time.Time  `json:"last_update"`
	MildConditionActiveCases     int64      `json:"mild_condition_active_cases"`
	RecoveredClosedCases         int64      `json:"recovered_closed_cases"`
	RecoveryCases                int64      `json:"recovery_cases"`
	TotalCases                   int64      `json:"total_cases"`
	UpdatedAt                    *time.Time `json:"updated_at"`
}
