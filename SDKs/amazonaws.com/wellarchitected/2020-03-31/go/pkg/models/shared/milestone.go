package shared

import (
	"time"
)

type Milestone struct {
	MilestoneName   *string    `json:"MilestoneName"`
	MilestoneNumber *int64     `json:"MilestoneNumber"`
	RecordedAt      *time.Time `json:"RecordedAt"`
	Workload        *Workload  `json:"Workload"`
}
