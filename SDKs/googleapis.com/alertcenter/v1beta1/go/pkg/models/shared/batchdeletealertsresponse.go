package shared

// BatchDeleteAlertsResponse
// Response to batch delete operation on alerts.
type BatchDeleteAlertsResponse struct {
	FailedAlertStatus map[string]Status `json:"failedAlertStatus,omitempty"`
	SuccessAlertIds   []string          `json:"successAlertIds,omitempty"`
}
