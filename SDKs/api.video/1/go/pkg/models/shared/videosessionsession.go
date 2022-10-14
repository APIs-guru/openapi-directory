package shared

import (
	"time"
)

type VideoSessionSession struct {
	EndedAt   *time.Time `json:"endedAt,omitempty"`
	LoadedAt  *time.Time `json:"loadedAt,omitempty"`
	SessionID *string    `json:"sessionId,omitempty"`
}
