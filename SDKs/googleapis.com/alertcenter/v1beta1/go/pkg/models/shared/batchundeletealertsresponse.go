package shared

// BatchUndeleteAlertsResponse
// Response to batch undelete operation on alerts.
type BatchUndeleteAlertsResponse struct {
	FailedAlertStatus map[string]Status `json:"failedAlertStatus,omitempty"`
	SuccessAlertIds   []string          `json:"successAlertIds,omitempty"`
}
