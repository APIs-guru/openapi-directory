package shared

import (
	"time"
)

type EdgeMetric struct {
	Dimension  *string    `json:"Dimension"`
	MetricName *string    `json:"MetricName"`
	Timestamp  *time.Time `json:"Timestamp"`
	Value      *float64   `json:"Value"`
}
