package shared



type DescribeLogGroupsRequest struct {
    Limit *int64 `json:"limit,omitempty"`
    LogGroupNamePrefix *string `json:"logGroupNamePrefix,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

