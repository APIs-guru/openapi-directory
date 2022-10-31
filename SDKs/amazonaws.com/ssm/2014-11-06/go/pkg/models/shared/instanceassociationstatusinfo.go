package shared

import (
"time")

type InstanceAssociationStatusInfo struct {
    AssociationID *string `json:"AssociationId,omitempty"`
    AssociationName *string `json:"AssociationName,omitempty"`
    AssociationVersion *string `json:"AssociationVersion,omitempty"`
    DetailedStatus *string `json:"DetailedStatus,omitempty"`
    DocumentVersion *string `json:"DocumentVersion,omitempty"`
    ErrorCode *string `json:"ErrorCode,omitempty"`
    ExecutionDate *time.Time `json:"ExecutionDate,omitempty"`
    ExecutionSummary *string `json:"ExecutionSummary,omitempty"`
    InstanceID *string `json:"InstanceId,omitempty"`
    Name *string `json:"Name,omitempty"`
    OutputURL *InstanceAssociationOutputURL `json:"OutputUrl,omitempty"`
    Status *string `json:"Status,omitempty"`
    
}

