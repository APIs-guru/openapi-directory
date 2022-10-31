package shared



type DescribeInstanceAssociationsStatusRequest struct {
    InstanceID string `json:"InstanceId"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

