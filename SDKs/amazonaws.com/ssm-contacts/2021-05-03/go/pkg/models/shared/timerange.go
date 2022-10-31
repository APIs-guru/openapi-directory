package shared

import (
"time")

type TimeRange struct {
    EndTime *time.Time `json:"EndTime,omitempty"`
    StartTime *time.Time `json:"StartTime,omitempty"`
    
}

