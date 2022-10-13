package shared

import (
	"time"
)

type VideoSessionSession struct {
	EndedAt   *time.Time `json:"endedAt"`
	LoadedAt  *time.Time `json:"loadedAt"`
	SessionID *string    `json:"sessionId"`
}
