package shared

import (
"time")

type OpsItemRelatedItemSummary struct {
    AssociationID *string `json:"AssociationId,omitempty"`
    AssociationType *string `json:"AssociationType,omitempty"`
    CreatedBy *OpsItemIdentity `json:"CreatedBy,omitempty"`
    CreatedTime *time.Time `json:"CreatedTime,omitempty"`
    LastModifiedBy *OpsItemIdentity `json:"LastModifiedBy,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    OpsItemID *string `json:"OpsItemId,omitempty"`
    ResourceType *string `json:"ResourceType,omitempty"`
    ResourceURI *string `json:"ResourceUri,omitempty"`
    
}

