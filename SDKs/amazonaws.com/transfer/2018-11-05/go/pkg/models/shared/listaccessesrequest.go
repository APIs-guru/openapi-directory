package shared



type ListAccessesRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ServerID string `json:"ServerId"`
    
}

