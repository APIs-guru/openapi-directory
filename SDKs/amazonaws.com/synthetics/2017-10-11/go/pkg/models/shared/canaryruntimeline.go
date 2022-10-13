package shared

import (
	"time"
)

type CanaryRunTimeline struct {
	Completed *time.Time `json:"Completed"`
	Started   *time.Time `json:"Started"`
}
