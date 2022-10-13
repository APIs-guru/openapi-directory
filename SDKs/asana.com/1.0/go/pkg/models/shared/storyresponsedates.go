package shared

import (
	"time"
)

type StoryResponseDates struct {
	DueAt   *time.Time `json:"due_at"`
	DueOn   *time.Time `json:"due_on"`
	StartOn *time.Time `json:"start_on"`
}
