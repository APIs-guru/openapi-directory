package shared

import (
	"time"
)

type LogEvent struct {
	CreatedAt *time.Time `json:"createdAt,omitempty"`
	Message   *string    `json:"message,omitempty"`
}
