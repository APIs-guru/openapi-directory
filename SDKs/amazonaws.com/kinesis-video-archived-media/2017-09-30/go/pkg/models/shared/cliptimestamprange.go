package shared

import (
	"time"
)

type ClipTimestampRange struct {
	EndTimestamp   time.Time `json:"EndTimestamp"`
	StartTimestamp time.Time `json:"StartTimestamp"`
}
