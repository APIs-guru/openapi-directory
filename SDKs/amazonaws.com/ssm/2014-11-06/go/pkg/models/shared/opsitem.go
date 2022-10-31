package shared

import (
"time")

type OpsItem struct {
    ActualEndTime *time.Time `json:"ActualEndTime,omitempty"`
    ActualStartTime *time.Time `json:"ActualStartTime,omitempty"`
    Category *string `json:"Category,omitempty"`
    CreatedBy *string `json:"CreatedBy,omitempty"`
    CreatedTime *time.Time `json:"CreatedTime,omitempty"`
    Description *string `json:"Description,omitempty"`
    LastModifiedBy *string `json:"LastModifiedBy,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    Notifications []OpsItemNotification `json:"Notifications,omitempty"`
    OperationalData map[string]OpsItemDataValue `json:"OperationalData,omitempty"`
    OpsItemID *string `json:"OpsItemId,omitempty"`
    OpsItemType *string `json:"OpsItemType,omitempty"`
    PlannedEndTime *time.Time `json:"PlannedEndTime,omitempty"`
    PlannedStartTime *time.Time `json:"PlannedStartTime,omitempty"`
    Priority *int64 `json:"Priority,omitempty"`
    RelatedOpsItems []RelatedOpsItem `json:"RelatedOpsItems,omitempty"`
    Severity *string `json:"Severity,omitempty"`
    Source *string `json:"Source,omitempty"`
    Status *OpsItemStatusEnum `json:"Status,omitempty"`
    Title *string `json:"Title,omitempty"`
    Version *string `json:"Version,omitempty"`
    
}

