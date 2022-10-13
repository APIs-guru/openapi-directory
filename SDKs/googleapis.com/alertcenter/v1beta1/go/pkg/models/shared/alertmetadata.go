package shared

type AlertMetadata struct {
	AlertID    *string `json:"alertId"`
	Assignee   *string `json:"assignee"`
	CustomerID *string `json:"customerId"`
	Etag       *string `json:"etag"`
	Severity   *string `json:"severity"`
	Status     *string `json:"status"`
	UpdateTime *string `json:"updateTime"`
}
