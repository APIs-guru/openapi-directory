package shared

import (
"time")

type ImageVersion struct {
    CreationTime time.Time `json:"CreationTime"`
    FailureReason *string `json:"FailureReason,omitempty"`
    ImageArn string `json:"ImageArn"`
    ImageVersionArn string `json:"ImageVersionArn"`
    ImageVersionStatus ImageVersionStatusEnum `json:"ImageVersionStatus"`
    LastModifiedTime time.Time `json:"LastModifiedTime"`
    Version int64 `json:"Version"`
    
}

