package shared

import (
	"time"
)

// TimestampRange
// The range of timestamps for which to return fragments.
type TimestampRange struct {
	EndTimestamp   time.Time `json:"EndTimestamp"`
	StartTimestamp time.Time `json:"StartTimestamp"`
}
