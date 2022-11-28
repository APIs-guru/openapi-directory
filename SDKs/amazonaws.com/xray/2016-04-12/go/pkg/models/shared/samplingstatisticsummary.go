package shared

import (
	"time"
)

// SamplingStatisticSummary
// Aggregated request sampling data for a sampling rule across all services for a 10-second window.
type SamplingStatisticSummary struct {
	BorrowCount  *int64     `json:"BorrowCount,omitempty"`
	RequestCount *int64     `json:"RequestCount,omitempty"`
	RuleName     *string    `json:"RuleName,omitempty"`
	SampledCount *int64     `json:"SampledCount,omitempty"`
	Timestamp    *time.Time `json:"Timestamp,omitempty"`
}
