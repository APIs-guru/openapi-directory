package shared

import (
	"time"
)

type SamplingStatisticSummary struct {
	BorrowCount  *int64     `json:"BorrowCount,omitempty"`
	RequestCount *int64     `json:"RequestCount,omitempty"`
	RuleName     *string    `json:"RuleName,omitempty"`
	SampledCount *int64     `json:"SampledCount,omitempty"`
	Timestamp    *time.Time `json:"Timestamp,omitempty"`
}
