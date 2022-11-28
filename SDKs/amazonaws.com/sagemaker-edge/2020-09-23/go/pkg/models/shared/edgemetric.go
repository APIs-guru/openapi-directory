package shared

import (
	"time"
)

// EdgeMetric
// Information required for edge device metrics.
type EdgeMetric struct {
	Dimension  *string    `json:"Dimension,omitempty"`
	MetricName *string    `json:"MetricName,omitempty"`
	Timestamp  *time.Time `json:"Timestamp,omitempty"`
	Value      *float64   `json:"Value,omitempty"`
}
