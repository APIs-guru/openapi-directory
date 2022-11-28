package shared

// BatchPutGeofenceError
// Contains error details for each geofence that failed to be stored in a given geofence collection.
type BatchPutGeofenceError struct {
	Error      BatchItemError `json:"Error"`
	GeofenceID string         `json:"GeofenceId"`
}
