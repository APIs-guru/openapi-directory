package shared



type BatchUndeleteAlertsRequest struct {
    AlertID []string `json:"alertId,omitempty"`
    CustomerID *string `json:"customerId,omitempty"`
    
}

