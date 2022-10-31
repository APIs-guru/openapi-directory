package shared

import (
"time")

type OpsMetadata struct {
    CreationDate *time.Time `json:"CreationDate,omitempty"`
    LastModifiedDate *time.Time `json:"LastModifiedDate,omitempty"`
    LastModifiedUser *string `json:"LastModifiedUser,omitempty"`
    OpsMetadataArn *string `json:"OpsMetadataArn,omitempty"`
    ResourceID *string `json:"ResourceId,omitempty"`
    
}

