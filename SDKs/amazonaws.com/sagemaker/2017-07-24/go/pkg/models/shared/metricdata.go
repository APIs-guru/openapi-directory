package shared

import (
	"time"
)

type MetricData struct {
	MetricName *string    `json:"MetricName,omitempty"`
	Timestamp  *time.Time `json:"Timestamp,omitempty"`
	Value      *float32   `json:"Value,omitempty"`
}
