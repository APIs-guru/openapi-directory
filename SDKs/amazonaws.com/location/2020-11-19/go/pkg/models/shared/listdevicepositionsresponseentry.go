package shared

import (
	"time"
)

// ListDevicePositionsResponseEntry
// Contains the tracker resource details.
type ListDevicePositionsResponseEntry struct {
	DeviceID   string    `json:"DeviceId"`
	Position   []float64 `json:"Position"`
	SampleTime time.Time `json:"SampleTime"`
}
