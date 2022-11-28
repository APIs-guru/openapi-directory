package shared

import (
	"time"
)

// OpsItem
// <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational work items (OpsItems) impacting the performance and health of their Amazon Web Services resources. OpsCenter is integrated with Amazon EventBridge and Amazon CloudWatch. This means you can configure these services to automatically create an OpsItem in OpsCenter when a CloudWatch alarm enters the ALARM state or when EventBridge processes an event from any Amazon Web Services service that publishes events. Configuring Amazon CloudWatch alarms and EventBridge events to automatically create OpsItems allows you to quickly diagnose and remediate issues with Amazon Web Services resources from a single console.</p> <p>To help you diagnose issues, each OpsItem includes contextually relevant information such as the name and ID of the Amazon Web Services resource that generated the OpsItem, alarm or event details, alarm history, and an alarm timeline graph. For the Amazon Web Services resource, OpsCenter aggregates information from Config, CloudTrail logs, and EventBridge, so you don't have to navigate across multiple console pages during your investigation. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
type OpsItem struct {
	ActualEndTime    *time.Time                  `json:"ActualEndTime,omitempty"`
	ActualStartTime  *time.Time                  `json:"ActualStartTime,omitempty"`
	Category         *string                     `json:"Category,omitempty"`
	CreatedBy        *string                     `json:"CreatedBy,omitempty"`
	CreatedTime      *time.Time                  `json:"CreatedTime,omitempty"`
	Description      *string                     `json:"Description,omitempty"`
	LastModifiedBy   *string                     `json:"LastModifiedBy,omitempty"`
	LastModifiedTime *time.Time                  `json:"LastModifiedTime,omitempty"`
	Notifications    []OpsItemNotification       `json:"Notifications,omitempty"`
	OperationalData  map[string]OpsItemDataValue `json:"OperationalData,omitempty"`
	OpsItemID        *string                     `json:"OpsItemId,omitempty"`
	OpsItemType      *string                     `json:"OpsItemType,omitempty"`
	PlannedEndTime   *time.Time                  `json:"PlannedEndTime,omitempty"`
	PlannedStartTime *time.Time                  `json:"PlannedStartTime,omitempty"`
	Priority         *int64                      `json:"Priority,omitempty"`
	RelatedOpsItems  []RelatedOpsItem            `json:"RelatedOpsItems,omitempty"`
	Severity         *string                     `json:"Severity,omitempty"`
	Source           *string                     `json:"Source,omitempty"`
	Status           *OpsItemStatusEnum          `json:"Status,omitempty"`
	Title            *string                     `json:"Title,omitempty"`
	Version          *string                     `json:"Version,omitempty"`
}
