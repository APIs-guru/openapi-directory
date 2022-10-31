package shared

import (
"time")

type MilestoneSummary struct {
    MilestoneName *string `json:"MilestoneName,omitempty"`
    MilestoneNumber *int64 `json:"MilestoneNumber,omitempty"`
    RecordedAt *time.Time `json:"RecordedAt,omitempty"`
    WorkloadSummary *WorkloadSummary `json:"WorkloadSummary,omitempty"`
    
}

