package shared

// BatchDeleteAlertsRequest
// A request to perform batch delete on alerts.
type BatchDeleteAlertsRequest struct {
	AlertID    []string `json:"alertId,omitempty"`
	CustomerID *string  `json:"customerId,omitempty"`
}
