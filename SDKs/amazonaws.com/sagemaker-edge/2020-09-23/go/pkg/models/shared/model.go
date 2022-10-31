package shared

import (
	"time"
)

type Model struct {
	LatestInference  *time.Time   `json:"LatestInference,omitempty"`
	LatestSampleTime *time.Time   `json:"LatestSampleTime,omitempty"`
	ModelMetrics     []EdgeMetric `json:"ModelMetrics,omitempty"`
	ModelName        *string      `json:"ModelName,omitempty"`
	ModelVersion     *string      `json:"ModelVersion,omitempty"`
}
