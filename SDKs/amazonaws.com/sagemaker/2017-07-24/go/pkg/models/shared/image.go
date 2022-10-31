package shared

import (
"time")

type Image struct {
    CreationTime time.Time `json:"CreationTime"`
    Description *string `json:"Description,omitempty"`
    DisplayName *string `json:"DisplayName,omitempty"`
    FailureReason *string `json:"FailureReason,omitempty"`
    ImageArn string `json:"ImageArn"`
    ImageName string `json:"ImageName"`
    ImageStatus ImageStatusEnum `json:"ImageStatus"`
    LastModifiedTime time.Time `json:"LastModifiedTime"`
    
}

