package shared

import (
	"time"
)

// TimeRange
// The time range.
type TimeRange struct {
	FromInclusive *time.Time `json:"FromInclusive,omitempty"`
	ToExclusive   *time.Time `json:"ToExclusive,omitempty"`
}
