package shared

import (
	"time"
)

type TrialComponentMetricSummary struct {
	Avg        *float64   `json:"Avg,omitempty"`
	Count      *int64     `json:"Count,omitempty"`
	Last       *float64   `json:"Last,omitempty"`
	Max        *float64   `json:"Max,omitempty"`
	MetricName *string    `json:"MetricName,omitempty"`
	Min        *float64   `json:"Min,omitempty"`
	SourceArn  *string    `json:"SourceArn,omitempty"`
	StdDev     *float64   `json:"StdDev,omitempty"`
	TimeStamp  *time.Time `json:"TimeStamp,omitempty"`
}
