package shared

import (
	"time"
)

type Stream struct {
	ChannelArn  *string           `json:"channelArn"`
	Health      *StreamHealthEnum `json:"health"`
	PlaybackURL *string           `json:"playbackUrl"`
	StartTime   *time.Time        `json:"startTime"`
	State       *StreamStateEnum  `json:"state"`
	ViewerCount *int64            `json:"viewerCount"`
}
