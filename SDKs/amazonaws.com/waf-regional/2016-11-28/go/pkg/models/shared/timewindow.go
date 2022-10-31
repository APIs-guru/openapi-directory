package shared

import (
"time")

type TimeWindow struct {
    EndTime time.Time `json:"EndTime"`
    StartTime time.Time `json:"StartTime"`
    
}

