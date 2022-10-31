package shared

import (
"time")

type JourneySchedule struct {
    EndTime *time.Time `json:"EndTime,omitempty"`
    StartTime *time.Time `json:"StartTime,omitempty"`
    Timezone *string `json:"Timezone,omitempty"`
    
}

