package shared

import (
	"time"
)

type ListDevicesRequest struct {
	DeviceFleetName      *string    `json:"DeviceFleetName"`
	LatestHeartbeatAfter *time.Time `json:"LatestHeartbeatAfter"`
	MaxResults           *int64     `json:"MaxResults"`
	ModelName            *string    `json:"ModelName"`
	NextToken            *string    `json:"NextToken"`
}
