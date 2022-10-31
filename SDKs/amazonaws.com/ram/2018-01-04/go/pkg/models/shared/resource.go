package shared

import (
"time")

type Resource struct {
    Arn *string `json:"arn,omitempty"`
    CreationTime *time.Time `json:"creationTime,omitempty"`
    LastUpdatedTime *time.Time `json:"lastUpdatedTime,omitempty"`
    ResourceGroupArn *string `json:"resourceGroupArn,omitempty"`
    ResourceShareArn *string `json:"resourceShareArn,omitempty"`
    Status *ResourceStatusEnum `json:"status,omitempty"`
    StatusMessage *string `json:"statusMessage,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

