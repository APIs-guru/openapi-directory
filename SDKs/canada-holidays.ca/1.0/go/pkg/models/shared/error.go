package shared

import (
"time")

type Error struct {
    Message *string `json:"message,omitempty"`
    Status *int64 `json:"status,omitempty"`
    Timestamp *time.Time `json:"timestamp,omitempty"`
    
}

