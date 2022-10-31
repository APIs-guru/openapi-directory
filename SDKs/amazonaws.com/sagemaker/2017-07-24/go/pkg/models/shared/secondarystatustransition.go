package shared

import (
"time")

type SecondaryStatusTransition struct {
    EndTime *time.Time `json:"EndTime,omitempty"`
    StartTime time.Time `json:"StartTime"`
    Status SecondaryStatusEnum `json:"Status"`
    StatusMessage *string `json:"StatusMessage,omitempty"`
    
}

