package shared

import (
	"time"
)

type LiveStreamSessionSession struct {
	EndedAt   *time.Time `json:"endedAt,omitempty"`
	LoadedAt  *time.Time `json:"loadedAt,omitempty"`
	SessionID *string    `json:"sessionId,omitempty"`
}
