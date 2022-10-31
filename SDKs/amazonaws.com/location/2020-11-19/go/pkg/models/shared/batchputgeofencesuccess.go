package shared

import (
"time")

type BatchPutGeofenceSuccess struct {
    CreateTime time.Time `json:"CreateTime"`
    GeofenceID string `json:"GeofenceId"`
    UpdateTime time.Time `json:"UpdateTime"`
    
}

