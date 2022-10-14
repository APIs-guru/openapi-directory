package shared

import (
	"time"
)

type ExecutionMetrics struct {
	Completed *time.Time `json:"completed,omitempty"`
	Duration  *float32   `json:"duration,omitempty"`
	Received  *time.Time `json:"received,omitempty"`
}
