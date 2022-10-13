package shared

import (
	"time"
)

type CreateOpsItemRequest struct {
	ActualEndTime    *time.Time                  `json:"ActualEndTime"`
	ActualStartTime  *time.Time                  `json:"ActualStartTime"`
	Category         *string                     `json:"Category"`
	Description      string                      `json:"Description"`
	Notifications    []OpsItemNotification       `json:"Notifications"`
	OperationalData  map[string]OpsItemDataValue `json:"OperationalData"`
	OpsItemType      *string                     `json:"OpsItemType"`
	PlannedEndTime   *time.Time                  `json:"PlannedEndTime"`
	PlannedStartTime *time.Time                  `json:"PlannedStartTime"`
	Priority         *int64                      `json:"Priority"`
	RelatedOpsItems  []RelatedOpsItem            `json:"RelatedOpsItems"`
	Severity         *string                     `json:"Severity"`
	Source           string                      `json:"Source"`
	Tags             []Tag                       `json:"Tags"`
	Title            string                      `json:"Title"`
}
