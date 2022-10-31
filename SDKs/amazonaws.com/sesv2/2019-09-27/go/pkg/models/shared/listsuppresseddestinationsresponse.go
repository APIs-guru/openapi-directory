package shared



type ListSuppressedDestinationsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    SuppressedDestinationSummaries []SuppressedDestinationSummary `json:"SuppressedDestinationSummaries,omitempty"`
    
}

