package shared



type BatchPutGeofenceError struct {
    Error BatchItemError `json:"Error"`
    GeofenceID string `json:"GeofenceId"`
    
}

