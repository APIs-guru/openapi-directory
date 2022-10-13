package shared

import (
	"time"
)

type MilestoneSummary struct {
	MilestoneName   *string          `json:"MilestoneName"`
	MilestoneNumber *int64           `json:"MilestoneNumber"`
	RecordedAt      *time.Time       `json:"RecordedAt"`
	WorkloadSummary *WorkloadSummary `json:"WorkloadSummary"`
}
