package shared

import (
	"time"
)

type IncidentRecord struct {
	Arn                  string                   `json:"arn"`
	AutomationExecutions []AutomationExecution    `json:"automationExecutions"`
	ChatChannel          *ChatChannel             `json:"chatChannel"`
	CreationTime         time.Time                `json:"creationTime"`
	DedupeString         string                   `json:"dedupeString"`
	Impact               int64                    `json:"impact"`
	IncidentRecordSource IncidentRecordSource     `json:"incidentRecordSource"`
	LastModifiedBy       string                   `json:"lastModifiedBy"`
	LastModifiedTime     time.Time                `json:"lastModifiedTime"`
	NotificationTargets  []NotificationTargetItem `json:"notificationTargets"`
	ResolvedTime         *time.Time               `json:"resolvedTime"`
	Status               IncidentRecordStatusEnum `json:"status"`
	Summary              *string                  `json:"summary"`
	Title                string                   `json:"title"`
}
