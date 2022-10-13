package shared

import (
	"time"
)

type UpdateOpsItemRequest struct {
	ActualEndTime           *time.Time                  `json:"ActualEndTime"`
	ActualStartTime         *time.Time                  `json:"ActualStartTime"`
	Category                *string                     `json:"Category"`
	Description             *string                     `json:"Description"`
	Notifications           []OpsItemNotification       `json:"Notifications"`
	OperationalData         map[string]OpsItemDataValue `json:"OperationalData"`
	OperationalDataToDelete []string                    `json:"OperationalDataToDelete"`
	OpsItemID               string                      `json:"OpsItemId"`
	PlannedEndTime          *time.Time                  `json:"PlannedEndTime"`
	PlannedStartTime        *time.Time                  `json:"PlannedStartTime"`
	Priority                *int64                      `json:"Priority"`
	RelatedOpsItems         []RelatedOpsItem            `json:"RelatedOpsItems"`
	Severity                *string                     `json:"Severity"`
	Status                  *OpsItemStatusEnum          `json:"Status"`
	Title                   *string                     `json:"Title"`
}
