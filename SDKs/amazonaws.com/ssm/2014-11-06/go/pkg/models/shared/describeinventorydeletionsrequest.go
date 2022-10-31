package shared



type DescribeInventoryDeletionsRequest struct {
    DeletionID *string `json:"DeletionId,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

