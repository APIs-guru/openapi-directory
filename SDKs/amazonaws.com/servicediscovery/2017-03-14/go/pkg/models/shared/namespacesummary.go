package shared

import (
"time")

type NamespaceSummary struct {
    Arn *string `json:"Arn,omitempty"`
    CreateDate *time.Time `json:"CreateDate,omitempty"`
    Description *string `json:"Description,omitempty"`
    ID *string `json:"Id,omitempty"`
    Name *string `json:"Name,omitempty"`
    Properties *NamespaceProperties `json:"Properties,omitempty"`
    ServiceCount *int64 `json:"ServiceCount,omitempty"`
    Type *NamespaceTypeEnum `json:"Type,omitempty"`
    
}

