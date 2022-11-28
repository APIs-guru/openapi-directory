package shared

// BatchDeleteGeofenceError
// Contains error details for each geofence that failed to delete from the geofence collection.
type BatchDeleteGeofenceError struct {
	Error      BatchItemError `json:"Error"`
	GeofenceID string         `json:"GeofenceId"`
}
