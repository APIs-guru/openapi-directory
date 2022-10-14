package shared

import (
	"time"
)

type Stream struct {
	ChannelArn  *string           `json:"channelArn,omitempty"`
	Health      *StreamHealthEnum `json:"health,omitempty"`
	PlaybackURL *string           `json:"playbackUrl,omitempty"`
	StartTime   *time.Time        `json:"startTime,omitempty"`
	State       *StreamStateEnum  `json:"state,omitempty"`
	ViewerCount *int64            `json:"viewerCount,omitempty"`
}
