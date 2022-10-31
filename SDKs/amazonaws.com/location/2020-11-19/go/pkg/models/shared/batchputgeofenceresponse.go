package shared



type BatchPutGeofenceResponse struct {
    Errors []BatchPutGeofenceError `json:"Errors"`
    Successes []BatchPutGeofenceSuccess `json:"Successes"`
    
}

