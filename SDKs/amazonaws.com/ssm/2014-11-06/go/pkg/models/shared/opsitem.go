package shared

import (
	"time"
)

type OpsItem struct {
	ActualEndTime    *time.Time                  `json:"ActualEndTime"`
	ActualStartTime  *time.Time                  `json:"ActualStartTime"`
	Category         *string                     `json:"Category"`
	CreatedBy        *string                     `json:"CreatedBy"`
	CreatedTime      *time.Time                  `json:"CreatedTime"`
	Description      *string                     `json:"Description"`
	LastModifiedBy   *string                     `json:"LastModifiedBy"`
	LastModifiedTime *time.Time                  `json:"LastModifiedTime"`
	Notifications    []OpsItemNotification       `json:"Notifications"`
	OperationalData  map[string]OpsItemDataValue `json:"OperationalData"`
	OpsItemID        *string                     `json:"OpsItemId"`
	OpsItemType      *string                     `json:"OpsItemType"`
	PlannedEndTime   *time.Time                  `json:"PlannedEndTime"`
	PlannedStartTime *time.Time                  `json:"PlannedStartTime"`
	Priority         *int64                      `json:"Priority"`
	RelatedOpsItems  []RelatedOpsItem            `json:"RelatedOpsItems"`
	Severity         *string                     `json:"Severity"`
	Source           *string                     `json:"Source"`
	Status           *OpsItemStatusEnum          `json:"Status"`
	Title            *string                     `json:"Title"`
	Version          *string                     `json:"Version"`
}
