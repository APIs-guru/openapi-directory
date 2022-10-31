package shared

import (
"time")

type ParameterHistory struct {
    AllowedPattern *string `json:"AllowedPattern,omitempty"`
    DataType *string `json:"DataType,omitempty"`
    Description *string `json:"Description,omitempty"`
    KeyID *string `json:"KeyId,omitempty"`
    Labels []string `json:"Labels,omitempty"`
    LastModifiedDate *time.Time `json:"LastModifiedDate,omitempty"`
    LastModifiedUser *string `json:"LastModifiedUser,omitempty"`
    Name *string `json:"Name,omitempty"`
    Policies []ParameterInlinePolicy `json:"Policies,omitempty"`
    Tier *ParameterTierEnum `json:"Tier,omitempty"`
    Type *ParameterTypeEnum `json:"Type,omitempty"`
    Value *string `json:"Value,omitempty"`
    Version *int64 `json:"Version,omitempty"`
    
}

