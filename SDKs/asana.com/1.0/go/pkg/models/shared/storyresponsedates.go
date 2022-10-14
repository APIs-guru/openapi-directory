package shared

import (
	"time"
)

type StoryResponseDates struct {
	DueAt   *time.Time `json:"due_at,omitempty"`
	DueOn   *time.Time `json:"due_on,omitempty"`
	StartOn *time.Time `json:"start_on,omitempty"`
}
