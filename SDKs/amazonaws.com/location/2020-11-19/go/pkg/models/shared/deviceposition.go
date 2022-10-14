package shared

import (
	"time"
)

type DevicePosition struct {
	DeviceID     *string   `json:"DeviceId,omitempty"`
	Position     []float64 `json:"Position"`
	ReceivedTime time.Time `json:"ReceivedTime"`
	SampleTime   time.Time `json:"SampleTime"`
}
