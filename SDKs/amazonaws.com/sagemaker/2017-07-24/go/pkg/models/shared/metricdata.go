package shared

import (
	"time"
)

type MetricData struct {
	MetricName *string    `json:"MetricName"`
	Timestamp  *time.Time `json:"Timestamp"`
	Value      *float32   `json:"Value"`
}
