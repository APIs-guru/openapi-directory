package shared

import (
	"time"
)

type StreamSummary struct {
	ChannelArn  *string           `json:"channelArn,omitempty"`
	Health      *StreamHealthEnum `json:"health,omitempty"`
	StartTime   *time.Time        `json:"startTime,omitempty"`
	State       *StreamStateEnum  `json:"state,omitempty"`
	ViewerCount *int64            `json:"viewerCount,omitempty"`
}
