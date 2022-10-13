package shared

import (
	"time"
)

type UpdateActivityRequest struct {
	Constraints       *Constraints                 `json:"constraints"`
	NowPlaying        *PlayerContext               `json:"nowPlaying"`
	PreviouslyPlaying *PlayerContext               `json:"previouslyPlaying"`
	Report            QueueActivityReportEventEnum `json:"report"`
	Timestamp         time.Time                    `json:"timestamp"`
	UserActivity      UserActivity                 `json:"userActivity"`
	Version           string                       `json:"version"`
}
