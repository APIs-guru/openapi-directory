package shared



type ListPagesByEngagementResult struct {
    NextToken *string `json:"NextToken,omitempty"`
    Pages []Page `json:"Pages"`
    
}

