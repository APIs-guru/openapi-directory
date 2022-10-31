package shared

import (
	"time"
)

type SamplingStatisticsDocument struct {
	BorrowCount  *int64    `json:"BorrowCount,omitempty"`
	ClientID     string    `json:"ClientID"`
	RequestCount int64     `json:"RequestCount"`
	RuleName     string    `json:"RuleName"`
	SampledCount int64     `json:"SampledCount"`
	Timestamp    time.Time `json:"Timestamp"`
}
