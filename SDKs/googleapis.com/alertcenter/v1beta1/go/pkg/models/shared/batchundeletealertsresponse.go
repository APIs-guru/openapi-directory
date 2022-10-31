package shared



type BatchUndeleteAlertsResponse struct {
    FailedAlertStatus map[string]Status `json:"failedAlertStatus,omitempty"`
    SuccessAlertIds []string `json:"successAlertIds,omitempty"`
    
}

