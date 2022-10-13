package shared

import (
	"time"
)

type EdgeModel struct {
	LatestInference  *time.Time `json:"LatestInference"`
	LatestSampleTime *time.Time `json:"LatestSampleTime"`
	ModelName        string     `json:"ModelName"`
	ModelVersion     string     `json:"ModelVersion"`
}
