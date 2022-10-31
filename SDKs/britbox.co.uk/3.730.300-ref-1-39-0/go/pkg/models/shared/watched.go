package shared

import (
"time")

type Watched struct {
    FirstWatchedDate time.Time `json:"firstWatchedDate"`
    IsFullyWatched *bool `json:"isFullyWatched,omitempty"`
    ItemID *string `json:"itemId,omitempty"`
    LastWatchedDate time.Time `json:"lastWatchedDate"`
    Position int32 `json:"position"`
    
}

