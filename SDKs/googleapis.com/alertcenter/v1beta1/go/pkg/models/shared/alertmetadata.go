package shared

// AlertMetadata
// An alert metadata.
type AlertMetadata struct {
	AlertID    *string `json:"alertId,omitempty"`
	Assignee   *string `json:"assignee,omitempty"`
	CustomerID *string `json:"customerId,omitempty"`
	Etag       *string `json:"etag,omitempty"`
	Severity   *string `json:"severity,omitempty"`
	Status     *string `json:"status,omitempty"`
	UpdateTime *string `json:"updateTime,omitempty"`
}
