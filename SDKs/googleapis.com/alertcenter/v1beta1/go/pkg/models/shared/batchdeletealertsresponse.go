package shared

type BatchDeleteAlertsResponse struct {
	FailedAlertStatus map[string]Status `json:"failedAlertStatus"`
	SuccessAlertIds   []string          `json:"successAlertIds"`
}
