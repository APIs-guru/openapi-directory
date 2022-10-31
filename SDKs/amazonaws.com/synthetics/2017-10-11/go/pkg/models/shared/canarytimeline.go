package shared

import (
	"time"
)

type CanaryTimeline struct {
	Created      *time.Time `json:"Created,omitempty"`
	LastModified *time.Time `json:"LastModified,omitempty"`
	LastStarted  *time.Time `json:"LastStarted,omitempty"`
	LastStopped  *time.Time `json:"LastStopped,omitempty"`
}
