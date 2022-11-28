package shared

import (
	"time"
)

// TimeRange
// A range of between two set times
type TimeRange struct {
	EndTime   *time.Time `json:"EndTime,omitempty"`
	StartTime *time.Time `json:"StartTime,omitempty"`
}
