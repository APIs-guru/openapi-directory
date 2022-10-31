package shared

import (
"time")

type DescribeImageResponse struct {
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    Description *string `json:"Description,omitempty"`
    DisplayName *string `json:"DisplayName,omitempty"`
    FailureReason *string `json:"FailureReason,omitempty"`
    ImageArn *string `json:"ImageArn,omitempty"`
    ImageName *string `json:"ImageName,omitempty"`
    ImageStatus *ImageStatusEnum `json:"ImageStatus,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    RoleArn *string `json:"RoleArn,omitempty"`
    
}

