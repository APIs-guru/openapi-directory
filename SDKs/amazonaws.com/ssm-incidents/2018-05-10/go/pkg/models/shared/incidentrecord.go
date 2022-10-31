package shared

import (
"time")

type IncidentRecord struct {
    Arn string `json:"arn"`
    AutomationExecutions []AutomationExecution `json:"automationExecutions,omitempty"`
    ChatChannel *ChatChannel `json:"chatChannel,omitempty"`
    CreationTime time.Time `json:"creationTime"`
    DedupeString string `json:"dedupeString"`
    Impact int64 `json:"impact"`
    IncidentRecordSource IncidentRecordSource `json:"incidentRecordSource"`
    LastModifiedBy string `json:"lastModifiedBy"`
    LastModifiedTime time.Time `json:"lastModifiedTime"`
    NotificationTargets []NotificationTargetItem `json:"notificationTargets,omitempty"`
    ResolvedTime *time.Time `json:"resolvedTime,omitempty"`
    Status IncidentRecordStatusEnum `json:"status"`
    Summary *string `json:"summary,omitempty"`
    Title string `json:"title"`
    
}

