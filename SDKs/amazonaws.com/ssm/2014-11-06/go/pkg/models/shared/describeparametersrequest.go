package shared



type DescribeParametersRequest struct {
    Filters []ParametersFilter `json:"Filters,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ParameterFilters []ParameterStringFilter `json:"ParameterFilters,omitempty"`
    
}

