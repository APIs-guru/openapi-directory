package shared

import (
	"time"
)

// Model
// Information about a model deployed on an edge device that is registered with SageMaker Edge Manager.
type Model struct {
	LatestInference  *time.Time   `json:"LatestInference,omitempty"`
	LatestSampleTime *time.Time   `json:"LatestSampleTime,omitempty"`
	ModelMetrics     []EdgeMetric `json:"ModelMetrics,omitempty"`
	ModelName        *string      `json:"ModelName,omitempty"`
	ModelVersion     *string      `json:"ModelVersion,omitempty"`
}
