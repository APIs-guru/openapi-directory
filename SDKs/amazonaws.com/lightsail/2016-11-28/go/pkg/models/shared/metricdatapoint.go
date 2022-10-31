package shared

import (
"time")

type MetricDatapoint struct {
    Average *float64 `json:"average,omitempty"`
    Maximum *float64 `json:"maximum,omitempty"`
    Minimum *float64 `json:"minimum,omitempty"`
    SampleCount *float64 `json:"sampleCount,omitempty"`
    Sum *float64 `json:"sum,omitempty"`
    Timestamp *time.Time `json:"timestamp,omitempty"`
    Unit *MetricUnitEnum `json:"unit,omitempty"`
    
}

