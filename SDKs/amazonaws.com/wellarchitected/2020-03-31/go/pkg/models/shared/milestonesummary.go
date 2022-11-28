package shared

import (
	"time"
)

// MilestoneSummary
// A milestone summary return object.
type MilestoneSummary struct {
	MilestoneName   *string          `json:"MilestoneName,omitempty"`
	MilestoneNumber *int64           `json:"MilestoneNumber,omitempty"`
	RecordedAt      *time.Time       `json:"RecordedAt,omitempty"`
	WorkloadSummary *WorkloadSummary `json:"WorkloadSummary,omitempty"`
}
