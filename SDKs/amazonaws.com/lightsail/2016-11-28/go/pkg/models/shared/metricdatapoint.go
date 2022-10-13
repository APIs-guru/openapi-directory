package shared

import (
	"time"
)

type MetricDatapoint struct {
	Average     *float64        `json:"average"`
	Maximum     *float64        `json:"maximum"`
	Minimum     *float64        `json:"minimum"`
	SampleCount *float64        `json:"sampleCount"`
	Sum         *float64        `json:"sum"`
	Timestamp   *time.Time      `json:"timestamp"`
	Unit        *MetricUnitEnum `json:"unit"`
}
