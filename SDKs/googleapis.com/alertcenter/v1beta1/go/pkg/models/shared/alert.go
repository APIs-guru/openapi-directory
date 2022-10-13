package shared

type Alert struct {
	AlertID                       *string                `json:"alertId"`
	CreateTime                    *string                `json:"createTime"`
	CustomerID                    *string                `json:"customerId"`
	Data                          map[string]interface{} `json:"data"`
	Deleted                       *bool                  `json:"deleted"`
	EndTime                       *string                `json:"endTime"`
	Etag                          *string                `json:"etag"`
	Metadata                      *AlertMetadata         `json:"metadata"`
	SecurityInvestigationToolLink *string                `json:"securityInvestigationToolLink"`
	Source                        *string                `json:"source"`
	StartTime                     *string                `json:"startTime"`
	Type                          *string                `json:"type"`
	UpdateTime                    *string                `json:"updateTime"`
}
