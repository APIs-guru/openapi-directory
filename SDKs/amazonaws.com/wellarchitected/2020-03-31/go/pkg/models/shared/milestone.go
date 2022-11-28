package shared

import (
	"time"
)

// Milestone
// A milestone return object.
type Milestone struct {
	MilestoneName   *string    `json:"MilestoneName,omitempty"`
	MilestoneNumber *int64     `json:"MilestoneNumber,omitempty"`
	RecordedAt      *time.Time `json:"RecordedAt,omitempty"`
	Workload        *Workload  `json:"Workload,omitempty"`
}
