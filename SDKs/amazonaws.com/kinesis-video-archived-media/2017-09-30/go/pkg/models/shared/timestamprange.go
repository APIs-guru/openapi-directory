package shared

import (
	"time"
)

type TimestampRange struct {
	EndTimestamp   time.Time `json:"EndTimestamp"`
	StartTimestamp time.Time `json:"StartTimestamp"`
}
