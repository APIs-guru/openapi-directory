package shared

import (
	"time"
)

// WorkloadSummary
// A workload summary return object.
type WorkloadSummary struct {
	ImprovementStatus *WorkloadImprovementStatusEnum `json:"ImprovementStatus,omitempty"`
	Lenses            []string                       `json:"Lenses,omitempty"`
	Owner             *string                        `json:"Owner,omitempty"`
	RiskCounts        map[string]int64               `json:"RiskCounts,omitempty"`
	UpdatedAt         *time.Time                     `json:"UpdatedAt,omitempty"`
	WorkloadArn       *string                        `json:"WorkloadArn,omitempty"`
	WorkloadID        *string                        `json:"WorkloadId,omitempty"`
	WorkloadName      *string                        `json:"WorkloadName,omitempty"`
}
