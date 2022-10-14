package shared

import (
	"time"
)

type Announcement struct {
	Announcement string     `json:"announcement"`
	ExpiresAt    *time.Time `json:"expires_at,omitempty"`
}
