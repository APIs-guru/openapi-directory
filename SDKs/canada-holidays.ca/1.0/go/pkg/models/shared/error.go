package shared

import (
	"time"
)

type Error struct {
	Message   *string    `json:"message"`
	Status    *int64     `json:"status"`
	Timestamp *time.Time `json:"timestamp"`
}
