package shared



type ListDocumentVersionsRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    Name string `json:"Name"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

