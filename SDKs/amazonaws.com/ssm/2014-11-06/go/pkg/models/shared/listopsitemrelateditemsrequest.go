package shared



type ListOpsItemRelatedItemsRequest struct {
    Filters []OpsItemRelatedItemsFilter `json:"Filters,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    OpsItemID *string `json:"OpsItemId,omitempty"`
    
}

