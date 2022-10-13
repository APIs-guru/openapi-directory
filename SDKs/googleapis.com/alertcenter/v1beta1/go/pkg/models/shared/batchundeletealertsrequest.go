package shared

type BatchUndeleteAlertsRequest struct {
	AlertID    []string `json:"alertId"`
	CustomerID *string  `json:"customerId"`
}
