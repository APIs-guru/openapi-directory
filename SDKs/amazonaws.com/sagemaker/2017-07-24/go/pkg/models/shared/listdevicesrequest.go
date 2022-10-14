package shared

import (
	"time"
)

type ListDevicesRequest struct {
	DeviceFleetName      *string    `json:"DeviceFleetName,omitempty"`
	LatestHeartbeatAfter *time.Time `json:"LatestHeartbeatAfter,omitempty"`
	MaxResults           *int64     `json:"MaxResults,omitempty"`
	ModelName            *string    `json:"ModelName,omitempty"`
	NextToken            *string    `json:"NextToken,omitempty"`
}
