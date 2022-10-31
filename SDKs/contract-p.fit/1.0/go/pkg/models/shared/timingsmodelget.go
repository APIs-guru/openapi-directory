package shared

import (
"time")

type TimingsModelGet struct {
    DoneTime *time.Time `json:"done_time,omitempty"`
    FeedbackTime *time.Time `json:"feedback_time,omitempty"`
    ProcessingPeriod *float64 `json:"processing_period,omitempty"`
    ReceiveTime *time.Time `json:"receive_time,omitempty"`
    StartTime *time.Time `json:"start_time,omitempty"`
    
}

