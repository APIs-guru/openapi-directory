package shared

// BatchUndeleteAlertsRequest
// A request to perform batch undelete on alerts.
type BatchUndeleteAlertsRequest struct {
	AlertID    []string `json:"alertId,omitempty"`
	CustomerID *string  `json:"customerId,omitempty"`
}
