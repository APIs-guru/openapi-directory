package shared

import (
	"time"
)

type ContainerServiceLogEvent struct {
	CreatedAt *time.Time `json:"createdAt"`
	Message   *string    `json:"message"`
}
