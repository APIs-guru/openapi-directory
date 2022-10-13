package shared

import (
	"time"
)

type CanaryTimeline struct {
	Created      *time.Time `json:"Created"`
	LastModified *time.Time `json:"LastModified"`
	LastStarted  *time.Time `json:"LastStarted"`
	LastStopped  *time.Time `json:"LastStopped"`
}
