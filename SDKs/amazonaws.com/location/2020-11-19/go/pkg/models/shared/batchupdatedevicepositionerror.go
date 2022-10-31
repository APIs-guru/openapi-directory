package shared

import (
	"time"
)

type BatchUpdateDevicePositionError struct {
	DeviceID   string         `json:"DeviceId"`
	Error      BatchItemError `json:"Error"`
	SampleTime time.Time      `json:"SampleTime"`
}
