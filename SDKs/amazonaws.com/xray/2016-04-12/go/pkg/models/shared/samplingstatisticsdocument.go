package shared

import (
	"time"
)

// SamplingStatisticsDocument
// Request sampling results for a single rule from a service. Results are for the last 10 seconds unless the service has been assigned a longer reporting interval after a previous call to <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a>.
type SamplingStatisticsDocument struct {
	BorrowCount  *int64    `json:"BorrowCount,omitempty"`
	ClientID     string    `json:"ClientID"`
	RequestCount int64     `json:"RequestCount"`
	RuleName     string    `json:"RuleName"`
	SampledCount int64     `json:"SampledCount"`
	Timestamp    time.Time `json:"Timestamp"`
}
