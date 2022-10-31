package shared



type DescribeSessionsRequest struct {
    Filters []SessionFilter `json:"Filters,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    State SessionStateEnum `json:"State"`
    
}

