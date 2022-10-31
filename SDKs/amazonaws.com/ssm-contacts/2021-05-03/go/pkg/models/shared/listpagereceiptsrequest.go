package shared



type ListPageReceiptsRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    PageID string `json:"PageId"`
    
}

