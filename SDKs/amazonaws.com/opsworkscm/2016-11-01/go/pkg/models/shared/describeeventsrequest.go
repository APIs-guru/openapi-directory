package shared



type DescribeEventsRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ServerName string `json:"ServerName"`
    
}

