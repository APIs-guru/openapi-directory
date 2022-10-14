package shared

import (
	"time"
)

type DashTimestampRange struct {
	EndTimestamp   *time.Time `json:"EndTimestamp,omitempty"`
	StartTimestamp *time.Time `json:"StartTimestamp,omitempty"`
}
