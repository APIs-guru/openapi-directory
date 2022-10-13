package shared

import (
	"time"
)

type WorkloadSummary struct {
	ImprovementStatus *WorkloadImprovementStatusEnum `json:"ImprovementStatus"`
	Lenses            []string                       `json:"Lenses"`
	Owner             *string                        `json:"Owner"`
	RiskCounts        map[string]int64               `json:"RiskCounts"`
	UpdatedAt         *time.Time                     `json:"UpdatedAt"`
	WorkloadArn       *string                        `json:"WorkloadArn"`
	WorkloadID        *string                        `json:"WorkloadId"`
	WorkloadName      *string                        `json:"WorkloadName"`
}
