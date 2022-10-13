package shared

import (
	"time"
)

type StreamSummary struct {
	ChannelArn  *string           `json:"channelArn"`
	Health      *StreamHealthEnum `json:"health"`
	StartTime   *time.Time        `json:"startTime"`
	State       *StreamStateEnum  `json:"state"`
	ViewerCount *int64            `json:"viewerCount"`
}
