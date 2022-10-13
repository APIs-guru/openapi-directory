package shared

import (
	"time"
)

type ExecutionMetrics struct {
	Completed *time.Time `json:"completed"`
	Duration  *float32   `json:"duration"`
	Received  *time.Time `json:"received"`
}
