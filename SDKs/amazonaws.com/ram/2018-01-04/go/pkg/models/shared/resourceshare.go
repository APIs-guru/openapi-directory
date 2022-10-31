package shared

import (
"time")

type ResourceShare struct {
    AllowExternalPrincipals *bool `json:"allowExternalPrincipals,omitempty"`
    CreationTime *time.Time `json:"creationTime,omitempty"`
    FeatureSet *ResourceShareFeatureSetEnum `json:"featureSet,omitempty"`
    LastUpdatedTime *time.Time `json:"lastUpdatedTime,omitempty"`
    Name *string `json:"name,omitempty"`
    OwningAccountID *string `json:"owningAccountId,omitempty"`
    ResourceShareArn *string `json:"resourceShareArn,omitempty"`
    Status *ResourceShareStatusEnum `json:"status,omitempty"`
    StatusMessage *string `json:"statusMessage,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    
}

