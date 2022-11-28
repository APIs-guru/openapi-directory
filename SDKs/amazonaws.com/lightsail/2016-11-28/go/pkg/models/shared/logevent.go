package shared

import (
	"time"
)

// LogEvent
// Describes a database log event.
type LogEvent struct {
	CreatedAt *time.Time `json:"createdAt,omitempty"`
	Message   *string    `json:"message,omitempty"`
}
