package shared

type BatchDeleteGeofenceError struct {
	Error      BatchItemError `json:"Error"`
	GeofenceID string         `json:"GeofenceId"`
}
