package shared

import (
	"time"
)

// BatchPutGeofenceSuccess
// Contains a summary of each geofence that was successfully stored in a given geofence collection.
type BatchPutGeofenceSuccess struct {
	CreateTime time.Time `json:"CreateTime"`
	GeofenceID string    `json:"GeofenceId"`
	UpdateTime time.Time `json:"UpdateTime"`
}
