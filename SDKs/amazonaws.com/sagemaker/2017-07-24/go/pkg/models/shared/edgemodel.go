package shared

import (
	"time"
)

// EdgeModel
// The model on the edge device.
type EdgeModel struct {
	LatestInference  *time.Time `json:"LatestInference,omitempty"`
	LatestSampleTime *time.Time `json:"LatestSampleTime,omitempty"`
	ModelName        string     `json:"ModelName"`
	ModelVersion     string     `json:"ModelVersion"`
}
