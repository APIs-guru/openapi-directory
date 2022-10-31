package shared

import (
	"time"
)

type PutGeofenceResponse struct {
	CreateTime time.Time `json:"CreateTime"`
	GeofenceID string    `json:"GeofenceId"`
	UpdateTime time.Time `json:"UpdateTime"`
}
