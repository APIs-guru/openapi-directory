package shared

import (
"time")

type UpdateActivityRequest struct {
    Constraints *Constraints `json:"constraints,omitempty"`
    NowPlaying *PlayerContext `json:"nowPlaying,omitempty"`
    PreviouslyPlaying *PlayerContext `json:"previouslyPlaying,omitempty"`
    Report QueueActivityReportEventEnum `json:"report"`
    Timestamp time.Time `json:"timestamp"`
    UserActivity UserActivity `json:"userActivity"`
    Version string `json:"version"`
    
}

