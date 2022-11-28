package shared

import (
	"time"
)

// Announcement
// Enterprise global announcement
type Announcement struct {
	Announcement string     `json:"announcement"`
	ExpiresAt    *time.Time `json:"expires_at,omitempty"`
}
