package shared

import (
	"time"
)

// BatchEvaluateGeofencesError
// Contains error details for each device that failed to evaluate its position against the geofences in a given geofence collection.
type BatchEvaluateGeofencesError struct {
	DeviceID   string         `json:"DeviceId"`
	Error      BatchItemError `json:"Error"`
	SampleTime time.Time      `json:"SampleTime"`
}
