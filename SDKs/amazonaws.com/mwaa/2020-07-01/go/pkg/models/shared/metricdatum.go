package shared

import (
	"time"
)

// MetricDatum
// Internal only API.
type MetricDatum struct {
	Dimensions      []Dimension   `json:"Dimensions,omitempty"`
	MetricName      string        `json:"MetricName"`
	StatisticValues *StatisticSet `json:"StatisticValues,omitempty"`
	Timestamp       time.Time     `json:"Timestamp"`
	Unit            *UnitEnum     `json:"Unit,omitempty"`
	Value           *float64      `json:"Value,omitempty"`
}
