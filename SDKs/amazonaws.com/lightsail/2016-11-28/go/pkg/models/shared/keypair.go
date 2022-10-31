package shared

import (
"time")

type KeyPair struct {
    Arn *string `json:"arn,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    Fingerprint *string `json:"fingerprint,omitempty"`
    Location *ResourceLocation `json:"location,omitempty"`
    Name *string `json:"name,omitempty"`
    ResourceType *ResourceTypeEnum `json:"resourceType,omitempty"`
    SupportCode *string `json:"supportCode,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    
}

