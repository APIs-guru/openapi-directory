package shared

import (
	"time"
)

type UsageReportEntity struct {
	CustomerID *string `json:"customerId,omitempty"`
	EntityID   *string `json:"entityId,omitempty"`
	ProfileID  *string `json:"profileId,omitempty"`
	Type       *string `json:"type,omitempty"`
	UserEmail  *string `json:"userEmail,omitempty"`
}

type UsageReportParameters struct {
	BoolValue     *bool                    `json:"boolValue,omitempty"`
	DatetimeValue *time.Time               `json:"datetimeValue,omitempty"`
	IntValue      *string                  `json:"intValue,omitempty"`
	MsgValue      []map[string]interface{} `json:"msgValue,omitempty"`
	Name          *string                  `json:"name,omitempty"`
	StringValue   *string                  `json:"stringValue,omitempty"`
}

type UsageReport struct {
	Date       *string                 `json:"date,omitempty"`
	Entity     *UsageReportEntity      `json:"entity,omitempty"`
	Etag       *string                 `json:"etag,omitempty"`
	Kind       *string                 `json:"kind,omitempty"`
	Parameters []UsageReportParameters `json:"parameters,omitempty"`
}
