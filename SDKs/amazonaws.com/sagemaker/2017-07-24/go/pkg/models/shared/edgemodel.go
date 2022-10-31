package shared

import (
"time")

type EdgeModel struct {
    LatestInference *time.Time `json:"LatestInference,omitempty"`
    LatestSampleTime *time.Time `json:"LatestSampleTime,omitempty"`
    ModelName string `json:"ModelName"`
    ModelVersion string `json:"ModelVersion"`
    
}

