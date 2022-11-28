package shared

import (
	"time"
)

// ClipTimestampRange
// The range of timestamps for which to return fragments.
type ClipTimestampRange struct {
	EndTimestamp   time.Time `json:"EndTimestamp"`
	StartTimestamp time.Time `json:"StartTimestamp"`
}
