package shared



type DescribeAcLsRequest struct {
    ACLName *string `json:"ACLName,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

