package shared

import (
"time")

type DescribeAppResponse struct {
    AppArn *string `json:"AppArn,omitempty"`
    AppName *string `json:"AppName,omitempty"`
    AppType *AppTypeEnum `json:"AppType,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    DomainID *string `json:"DomainId,omitempty"`
    FailureReason *string `json:"FailureReason,omitempty"`
    LastHealthCheckTimestamp *time.Time `json:"LastHealthCheckTimestamp,omitempty"`
    LastUserActivityTimestamp *time.Time `json:"LastUserActivityTimestamp,omitempty"`
    ResourceSpec *ResourceSpec `json:"ResourceSpec,omitempty"`
    Status *AppStatusEnum `json:"Status,omitempty"`
    UserProfileName *string `json:"UserProfileName,omitempty"`
    
}

