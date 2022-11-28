package shared

import (
	"time"
)

// ContainerServiceLogEvent
// Describes the log events of a container of an Amazon Lightsail container service.
type ContainerServiceLogEvent struct {
	CreatedAt *time.Time `json:"createdAt,omitempty"`
	Message   *string    `json:"message,omitempty"`
}
