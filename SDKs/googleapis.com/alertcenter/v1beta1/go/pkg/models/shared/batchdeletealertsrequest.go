package shared

type BatchDeleteAlertsRequest struct {
	AlertID    []string `json:"alertId,omitempty"`
	CustomerID *string  `json:"customerId,omitempty"`
}
