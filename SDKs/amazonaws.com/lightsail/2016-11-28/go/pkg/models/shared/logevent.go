package shared

import (
	"time"
)

type LogEvent struct {
	CreatedAt *time.Time `json:"createdAt"`
	Message   *string    `json:"message"`
}
