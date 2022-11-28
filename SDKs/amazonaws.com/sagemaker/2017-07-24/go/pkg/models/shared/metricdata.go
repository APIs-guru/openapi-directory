package shared

import (
	"time"
)

// MetricData
// The name, value, and date and time of a metric that was emitted to Amazon CloudWatch.
type MetricData struct {
	MetricName *string    `json:"MetricName,omitempty"`
	Timestamp  *time.Time `json:"Timestamp,omitempty"`
	Value      *float32   `json:"Value,omitempty"`
}
