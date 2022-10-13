package shared

import (
	"time"
)

type OpsItemSummary struct {
	ActualEndTime    *time.Time                  `json:"ActualEndTime"`
	ActualStartTime  *time.Time                  `json:"ActualStartTime"`
	Category         *string                     `json:"Category"`
	CreatedBy        *string                     `json:"CreatedBy"`
	CreatedTime      *time.Time                  `json:"CreatedTime"`
	LastModifiedBy   *string                     `json:"LastModifiedBy"`
	LastModifiedTime *time.Time                  `json:"LastModifiedTime"`
	OperationalData  map[string]OpsItemDataValue `json:"OperationalData"`
	OpsItemID        *string                     `json:"OpsItemId"`
	OpsItemType      *string                     `json:"OpsItemType"`
	PlannedEndTime   *time.Time                  `json:"PlannedEndTime"`
	PlannedStartTime *time.Time                  `json:"PlannedStartTime"`
	Priority         *int64                      `json:"Priority"`
	Severity         *string                     `json:"Severity"`
	Source           *string                     `json:"Source"`
	Status           *OpsItemStatusEnum          `json:"Status"`
	Title            *string                     `json:"Title"`
}
