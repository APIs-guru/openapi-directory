package shared



type ListFirewallsRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    VpcIds []string `json:"VpcIds,omitempty"`
    
}

