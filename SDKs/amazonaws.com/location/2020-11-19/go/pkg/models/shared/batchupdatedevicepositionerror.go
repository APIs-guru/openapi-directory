package shared

import (
	"time"
)

// BatchUpdateDevicePositionError
// Contains error details for each device that failed to update its position.
type BatchUpdateDevicePositionError struct {
	DeviceID   string         `json:"DeviceId"`
	Error      BatchItemError `json:"Error"`
	SampleTime time.Time      `json:"SampleTime"`
}
