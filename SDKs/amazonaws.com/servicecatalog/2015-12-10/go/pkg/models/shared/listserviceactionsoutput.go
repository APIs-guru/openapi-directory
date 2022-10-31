package shared



type ListServiceActionsOutput struct {
    NextPageToken *string `json:"NextPageToken,omitempty"`
    ServiceActionSummaries []ServiceActionSummary `json:"ServiceActionSummaries,omitempty"`
    
}

