package shared

import (
	"time"
)

type DevicePosition struct {
	DeviceID     *string   `json:"DeviceId"`
	Position     []float64 `json:"Position"`
	ReceivedTime time.Time `json:"ReceivedTime"`
	SampleTime   time.Time `json:"SampleTime"`
}
