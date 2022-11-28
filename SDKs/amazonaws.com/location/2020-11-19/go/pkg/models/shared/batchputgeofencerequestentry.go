package shared

// BatchPutGeofenceRequestEntry
// Contains geofence geometry details.
type BatchPutGeofenceRequestEntry struct {
	GeofenceID string           `json:"GeofenceId"`
	Geometry   GeofenceGeometry `json:"Geometry"`
}
