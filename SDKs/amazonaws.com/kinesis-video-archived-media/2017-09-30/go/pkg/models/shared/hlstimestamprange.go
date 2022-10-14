package shared

import (
	"time"
)

type HlsTimestampRange struct {
	EndTimestamp   *time.Time `json:"EndTimestamp,omitempty"`
	StartTimestamp *time.Time `json:"StartTimestamp,omitempty"`
}
