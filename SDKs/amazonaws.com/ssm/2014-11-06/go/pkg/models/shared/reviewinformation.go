package shared

import (
"time")

type ReviewInformation struct {
    ReviewedTime *time.Time `json:"ReviewedTime,omitempty"`
    Reviewer *string `json:"Reviewer,omitempty"`
    Status *ReviewStatusEnum `json:"Status,omitempty"`
    
}

