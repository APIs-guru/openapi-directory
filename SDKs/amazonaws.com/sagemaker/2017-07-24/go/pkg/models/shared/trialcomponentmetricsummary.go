package shared

import (
	"time"
)

type TrialComponentMetricSummary struct {
	Avg        *float64   `json:"Avg"`
	Count      *int64     `json:"Count"`
	Last       *float64   `json:"Last"`
	Max        *float64   `json:"Max"`
	MetricName *string    `json:"MetricName"`
	Min        *float64   `json:"Min"`
	SourceArn  *string    `json:"SourceArn"`
	StdDev     *float64   `json:"StdDev"`
	TimeStamp  *time.Time `json:"TimeStamp"`
}
