package shared



type BatchDeleteAlertsResponse struct {
    FailedAlertStatus map[string]Status `json:"failedAlertStatus,omitempty"`
    SuccessAlertIds []string `json:"successAlertIds,omitempty"`
    
}

