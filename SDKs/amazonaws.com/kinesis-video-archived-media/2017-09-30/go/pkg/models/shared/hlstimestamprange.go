package shared

import (
	"time"
)

type HlsTimestampRange struct {
	EndTimestamp   *time.Time `json:"EndTimestamp"`
	StartTimestamp *time.Time `json:"StartTimestamp"`
}
