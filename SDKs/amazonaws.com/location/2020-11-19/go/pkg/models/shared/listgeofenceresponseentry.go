package shared

import (
	"time"
)

// ListGeofenceResponseEntry
// Contains a list of geofences stored in a given geofence collection.
type ListGeofenceResponseEntry struct {
	CreateTime time.Time        `json:"CreateTime"`
	GeofenceID string           `json:"GeofenceId"`
	Geometry   GeofenceGeometry `json:"Geometry"`
	Status     string           `json:"Status"`
	UpdateTime time.Time        `json:"UpdateTime"`
}
