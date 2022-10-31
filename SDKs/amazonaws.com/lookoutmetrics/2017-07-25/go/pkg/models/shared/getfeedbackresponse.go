package shared



type GetFeedbackResponse struct {
    AnomalyGroupTimeSeriesFeedback []TimeSeriesFeedback `json:"AnomalyGroupTimeSeriesFeedback,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

