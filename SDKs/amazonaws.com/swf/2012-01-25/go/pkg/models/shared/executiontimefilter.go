package shared

import (
	"time"
)

type ExecutionTimeFilter struct {
	LatestDate *time.Time `json:"latestDate,omitempty"`
	OldestDate time.Time  `json:"oldestDate"`
}
