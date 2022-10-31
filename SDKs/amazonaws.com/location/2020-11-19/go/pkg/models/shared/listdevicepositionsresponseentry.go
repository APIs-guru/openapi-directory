package shared

import (
"time")

type ListDevicePositionsResponseEntry struct {
    DeviceID string `json:"DeviceId"`
    Position []float64 `json:"Position"`
    SampleTime time.Time `json:"SampleTime"`
    
}

