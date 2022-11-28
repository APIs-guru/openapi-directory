package shared

import (
	"time"
)

// CanaryRunTimeline
// This structure contains the start and end times of a single canary run.
type CanaryRunTimeline struct {
	Completed *time.Time `json:"Completed,omitempty"`
	Started   *time.Time `json:"Started,omitempty"`
}
