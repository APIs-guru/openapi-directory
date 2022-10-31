package shared

import (
"time")

type DescribeActionResponse struct {
    ActionArn *string `json:"ActionArn,omitempty"`
    ActionName *string `json:"ActionName,omitempty"`
    ActionType *string `json:"ActionType,omitempty"`
    CreatedBy *UserContext `json:"CreatedBy,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    Description *string `json:"Description,omitempty"`
    LastModifiedBy *UserContext `json:"LastModifiedBy,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    MetadataProperties *MetadataProperties `json:"MetadataProperties,omitempty"`
    Properties map[string]string `json:"Properties,omitempty"`
    Source *ActionSource `json:"Source,omitempty"`
    Status *ActionStatusEnum `json:"Status,omitempty"`
    
}

