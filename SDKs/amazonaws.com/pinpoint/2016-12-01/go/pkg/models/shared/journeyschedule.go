package shared

import (
	"time"
)

type JourneySchedule struct {
	EndTime   *time.Time `json:"EndTime"`
	StartTime *time.Time `json:"StartTime"`
	Timezone  *string    `json:"Timezone"`
}
