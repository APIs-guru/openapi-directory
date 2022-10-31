package shared

import (
"time")

type CanaryRunTimeline struct {
    Completed *time.Time `json:"Completed,omitempty"`
    Started *time.Time `json:"Started,omitempty"`
    
}

