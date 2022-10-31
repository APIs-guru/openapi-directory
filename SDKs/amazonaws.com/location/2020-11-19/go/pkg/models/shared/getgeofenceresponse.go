package shared

import (
	"time"
)

type GetGeofenceResponse struct {
	CreateTime time.Time        `json:"CreateTime"`
	GeofenceID string           `json:"GeofenceId"`
	Geometry   GeofenceGeometry `json:"Geometry"`
	Status     string           `json:"Status"`
	UpdateTime time.Time        `json:"UpdateTime"`
}
