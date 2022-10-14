package shared

import (
	"time"
)

type UpdateOpsItemRequest struct {
	ActualEndTime           *time.Time                  `json:"ActualEndTime,omitempty"`
	ActualStartTime         *time.Time                  `json:"ActualStartTime,omitempty"`
	Category                *string                     `json:"Category,omitempty"`
	Description             *string                     `json:"Description,omitempty"`
	Notifications           []OpsItemNotification       `json:"Notifications,omitempty"`
	OperationalData         map[string]OpsItemDataValue `json:"OperationalData,omitempty"`
	OperationalDataToDelete []string                    `json:"OperationalDataToDelete,omitempty"`
	OpsItemID               string                      `json:"OpsItemId"`
	PlannedEndTime          *time.Time                  `json:"PlannedEndTime,omitempty"`
	PlannedStartTime        *time.Time                  `json:"PlannedStartTime,omitempty"`
	Priority                *int64                      `json:"Priority,omitempty"`
	RelatedOpsItems         []RelatedOpsItem            `json:"RelatedOpsItems,omitempty"`
	Severity                *string                     `json:"Severity,omitempty"`
	Status                  *OpsItemStatusEnum          `json:"Status,omitempty"`
	Title                   *string                     `json:"Title,omitempty"`
}
