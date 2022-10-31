package shared



type DescribeOpsItemsRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    OpsItemFilters []OpsItemFilter `json:"OpsItemFilters,omitempty"`
    
}

