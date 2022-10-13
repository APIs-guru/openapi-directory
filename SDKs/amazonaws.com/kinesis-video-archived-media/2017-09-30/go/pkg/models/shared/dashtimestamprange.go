package shared

import (
	"time"
)

type DashTimestampRange struct {
	EndTimestamp   *time.Time `json:"EndTimestamp"`
	StartTimestamp *time.Time `json:"StartTimestamp"`
}
