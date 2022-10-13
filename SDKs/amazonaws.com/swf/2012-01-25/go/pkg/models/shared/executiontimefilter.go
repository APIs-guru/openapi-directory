package shared

import (
	"time"
)

type ExecutionTimeFilter struct {
	LatestDate *time.Time `json:"latestDate"`
	OldestDate time.Time  `json:"oldestDate"`
}
