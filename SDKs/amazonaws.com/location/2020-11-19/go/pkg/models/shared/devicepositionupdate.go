package shared

import (
	"time"
)

type DevicePositionUpdate struct {
	DeviceID   string    `json:"DeviceId"`
	Position   []float64 `json:"Position"`
	SampleTime time.Time `json:"SampleTime"`
}
