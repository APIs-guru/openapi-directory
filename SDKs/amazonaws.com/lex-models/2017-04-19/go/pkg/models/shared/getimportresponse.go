package shared

import (
"time")

type GetImportResponse struct {
    CreatedDate *time.Time `json:"createdDate,omitempty"`
    FailureReason []string `json:"failureReason,omitempty"`
    ImportID *string `json:"importId,omitempty"`
    ImportStatus *ImportStatusEnum `json:"importStatus,omitempty"`
    MergeStrategy *MergeStrategyEnum `json:"mergeStrategy,omitempty"`
    Name *string `json:"name,omitempty"`
    ResourceType *ResourceTypeEnum `json:"resourceType,omitempty"`
    
}

