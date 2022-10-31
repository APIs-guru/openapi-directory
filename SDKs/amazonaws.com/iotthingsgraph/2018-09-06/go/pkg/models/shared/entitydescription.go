package shared

import (
"time")

type EntityDescription struct {
    Arn *string `json:"arn,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    Definition *DefinitionDocument `json:"definition,omitempty"`
    ID *string `json:"id,omitempty"`
    Type *EntityTypeEnum `json:"type,omitempty"`
    
}

