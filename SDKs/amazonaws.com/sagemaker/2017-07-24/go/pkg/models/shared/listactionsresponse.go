package shared



type ListActionsResponse struct {
    ActionSummaries []ActionSummary `json:"ActionSummaries,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

