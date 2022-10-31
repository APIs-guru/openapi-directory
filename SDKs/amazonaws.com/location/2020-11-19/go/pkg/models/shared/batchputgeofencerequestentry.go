package shared



type BatchPutGeofenceRequestEntry struct {
    GeofenceID string `json:"GeofenceId"`
    Geometry GeofenceGeometry `json:"Geometry"`
    
}

