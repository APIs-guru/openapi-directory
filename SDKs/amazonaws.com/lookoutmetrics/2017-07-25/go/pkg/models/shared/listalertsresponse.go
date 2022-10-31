package shared



type ListAlertsResponse struct {
    AlertSummaryList []AlertSummary `json:"AlertSummaryList,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

