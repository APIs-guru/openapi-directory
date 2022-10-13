package shared

import (
	"time"
)

type Model struct {
	LatestInference  *time.Time   `json:"LatestInference"`
	LatestSampleTime *time.Time   `json:"LatestSampleTime"`
	ModelMetrics     []EdgeMetric `json:"ModelMetrics"`
	ModelName        *string      `json:"ModelName"`
	ModelVersion     *string      `json:"ModelVersion"`
}
