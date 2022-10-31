package shared



type ListHandshakesForOrganizationRequest struct {
    Filter *HandshakeFilter `json:"Filter,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

