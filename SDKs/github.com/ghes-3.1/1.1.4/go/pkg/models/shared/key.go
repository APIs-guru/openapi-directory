package shared

import (
	"time"
)

type Key struct {
	CreatedAt time.Time `json:"created_at"`
	ID        int64     `json:"id"`
	Key       string    `json:"key"`
	ReadOnly  bool      `json:"read_only"`
	Title     string    `json:"title"`
	URL       string    `json:"url"`
	Verified  bool      `json:"verified"`
}
