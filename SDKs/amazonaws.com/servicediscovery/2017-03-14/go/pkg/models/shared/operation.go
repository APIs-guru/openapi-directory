package shared

import (
"time")

type Operation struct {
    CreateDate *time.Time `json:"CreateDate,omitempty"`
    ErrorCode *string `json:"ErrorCode,omitempty"`
    ErrorMessage *string `json:"ErrorMessage,omitempty"`
    ID *string `json:"Id,omitempty"`
    Status *OperationStatusEnum `json:"Status,omitempty"`
    Targets map[string]string `json:"Targets,omitempty"`
    Type *OperationTypeEnum `json:"Type,omitempty"`
    UpdateDate *time.Time `json:"UpdateDate,omitempty"`
    
}

