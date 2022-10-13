package shared

import (
	"time"
)

type UsageReportEntity struct {
	CustomerID *string `json:"customerId"`
	EntityID   *string `json:"entityId"`
	ProfileID  *string `json:"profileId"`
	Type       *string `json:"type"`
	UserEmail  *string `json:"userEmail"`
}

type UsageReportParameters struct {
	BoolValue     *bool                    `json:"boolValue"`
	DatetimeValue *time.Time               `json:"datetimeValue"`
	IntValue      *string                  `json:"intValue"`
	MsgValue      []map[string]interface{} `json:"msgValue"`
	Name          *string                  `json:"name"`
	StringValue   *string                  `json:"stringValue"`
}

type UsageReport struct {
	Date       *string                 `json:"date"`
	Entity     *UsageReportEntity      `json:"entity"`
	Etag       *string                 `json:"etag"`
	Kind       *string                 `json:"kind"`
	Parameters []UsageReportParameters `json:"parameters"`
}
