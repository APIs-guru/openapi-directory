package shared

import (
	"time"
)

// OpsItemSummary
// A count of OpsItems.
type OpsItemSummary struct {
	ActualEndTime    *time.Time                  `json:"ActualEndTime,omitempty"`
	ActualStartTime  *time.Time                  `json:"ActualStartTime,omitempty"`
	Category         *string                     `json:"Category,omitempty"`
	CreatedBy        *string                     `json:"CreatedBy,omitempty"`
	CreatedTime      *time.Time                  `json:"CreatedTime,omitempty"`
	LastModifiedBy   *string                     `json:"LastModifiedBy,omitempty"`
	LastModifiedTime *time.Time                  `json:"LastModifiedTime,omitempty"`
	OperationalData  map[string]OpsItemDataValue `json:"OperationalData,omitempty"`
	OpsItemID        *string                     `json:"OpsItemId,omitempty"`
	OpsItemType      *string                     `json:"OpsItemType,omitempty"`
	PlannedEndTime   *time.Time                  `json:"PlannedEndTime,omitempty"`
	PlannedStartTime *time.Time                  `json:"PlannedStartTime,omitempty"`
	Priority         *int64                      `json:"Priority,omitempty"`
	Severity         *string                     `json:"Severity,omitempty"`
	Source           *string                     `json:"Source,omitempty"`
	Status           *OpsItemStatusEnum          `json:"Status,omitempty"`
	Title            *string                     `json:"Title,omitempty"`
}
