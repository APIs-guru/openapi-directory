package shared



type ListPagesByContactRequest struct {
    ContactID string `json:"ContactId"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

