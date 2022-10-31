package shared

type Alert struct {
	AlertID                       *string                `json:"alertId,omitempty"`
	CreateTime                    *string                `json:"createTime,omitempty"`
	CustomerID                    *string                `json:"customerId,omitempty"`
	Data                          map[string]interface{} `json:"data,omitempty"`
	Deleted                       *bool                  `json:"deleted,omitempty"`
	EndTime                       *string                `json:"endTime,omitempty"`
	Etag                          *string                `json:"etag,omitempty"`
	Metadata                      *AlertMetadata         `json:"metadata,omitempty"`
	SecurityInvestigationToolLink *string                `json:"securityInvestigationToolLink,omitempty"`
	Source                        *string                `json:"source,omitempty"`
	StartTime                     *string                `json:"startTime,omitempty"`
	Type                          *string                `json:"type,omitempty"`
	UpdateTime                    *string                `json:"updateTime,omitempty"`
}
