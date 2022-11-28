package shared

import (
	"time"
)

// DevicePositionUpdate
// Contains the position update details for a device.
type DevicePositionUpdate struct {
	DeviceID   string    `json:"DeviceId"`
	Position   []float64 `json:"Position"`
	SampleTime time.Time `json:"SampleTime"`
}
