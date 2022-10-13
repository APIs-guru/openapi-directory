package shared

import (
	"time"
)

type LiveStreamSessionSession struct {
	EndedAt   *time.Time `json:"endedAt"`
	LoadedAt  *time.Time `json:"loadedAt"`
	SessionID *string    `json:"sessionId"`
}
