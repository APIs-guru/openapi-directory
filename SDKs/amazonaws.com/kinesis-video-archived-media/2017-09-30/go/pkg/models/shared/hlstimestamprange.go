package shared

import (
	"time"
)

// HlsTimestampRange
// <p>The start and end of the timestamp range for the requested media.</p> <p>This value should not be present if <code>PlaybackType</code> is <code>LIVE</code>.</p>
type HlsTimestampRange struct {
	EndTimestamp   *time.Time `json:"EndTimestamp,omitempty"`
	StartTimestamp *time.Time `json:"StartTimestamp,omitempty"`
}
