package shared

type BatchDeleteAlertsRequest struct {
	AlertID    []string `json:"alertId"`
	CustomerID *string  `json:"customerId"`
}
