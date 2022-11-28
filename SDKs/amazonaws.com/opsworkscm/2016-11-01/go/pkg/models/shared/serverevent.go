package shared

import (
	"time"
)

// ServerEvent
// An event that is related to the server, such as the start of maintenance or backup.
type ServerEvent struct {
	CreatedAt  *time.Time `json:"CreatedAt,omitempty"`
	LogURL     *string    `json:"LogUrl,omitempty"`
	Message    *string    `json:"Message,omitempty"`
	ServerName *string    `json:"ServerName,omitempty"`
}
