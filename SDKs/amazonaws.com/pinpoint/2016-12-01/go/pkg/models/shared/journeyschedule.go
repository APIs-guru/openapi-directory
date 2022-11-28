package shared

import (
	"time"
)

// JourneySchedule
// Specifies the schedule settings for a journey.
type JourneySchedule struct {
	EndTime   *time.Time `json:"EndTime,omitempty"`
	StartTime *time.Time `json:"StartTime,omitempty"`
	Timezone  *string    `json:"Timezone,omitempty"`
}
