package shared

import (
"time")

type CreateOpsItemRequest struct {
    ActualEndTime *time.Time `json:"ActualEndTime,omitempty"`
    ActualStartTime *time.Time `json:"ActualStartTime,omitempty"`
    Category *string `json:"Category,omitempty"`
    Description string `json:"Description"`
    Notifications []OpsItemNotification `json:"Notifications,omitempty"`
    OperationalData map[string]OpsItemDataValue `json:"OperationalData,omitempty"`
    OpsItemType *string `json:"OpsItemType,omitempty"`
    PlannedEndTime *time.Time `json:"PlannedEndTime,omitempty"`
    PlannedStartTime *time.Time `json:"PlannedStartTime,omitempty"`
    Priority *int64 `json:"Priority,omitempty"`
    RelatedOpsItems []RelatedOpsItem `json:"RelatedOpsItems,omitempty"`
    Severity *string `json:"Severity,omitempty"`
    Source string `json:"Source"`
    Tags []Tag `json:"Tags,omitempty"`
    Title string `json:"Title"`
    
}

