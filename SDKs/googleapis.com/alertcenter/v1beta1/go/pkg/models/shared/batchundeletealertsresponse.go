package shared

type BatchUndeleteAlertsResponse struct {
	FailedAlertStatus map[string]Status `json:"failedAlertStatus"`
	SuccessAlertIds   []string          `json:"successAlertIds"`
}
