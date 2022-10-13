package shared

import (
	"time"
)

type SamplingStatisticSummary struct {
	BorrowCount  *int64     `json:"BorrowCount"`
	RequestCount *int64     `json:"RequestCount"`
	RuleName     *string    `json:"RuleName"`
	SampledCount *int64     `json:"SampledCount"`
	Timestamp    *time.Time `json:"Timestamp"`
}
