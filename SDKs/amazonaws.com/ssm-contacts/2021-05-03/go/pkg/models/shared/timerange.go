package shared

import (
	"time"
)

type TimeRange struct {
	EndTime   *time.Time `json:"EndTime"`
	StartTime *time.Time `json:"StartTime"`
}
