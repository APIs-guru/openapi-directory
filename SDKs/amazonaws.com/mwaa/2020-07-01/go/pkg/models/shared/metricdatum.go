package shared

import (
	"time"
)

type MetricDatum struct {
	Dimensions      []Dimension   `json:"Dimensions"`
	MetricName      string        `json:"MetricName"`
	StatisticValues *StatisticSet `json:"StatisticValues"`
	Timestamp       time.Time     `json:"Timestamp"`
	Unit            *UnitEnum     `json:"Unit"`
	Value           *float64      `json:"Value"`
}
