package shared



type ListDedicatedIPPoolsResponse struct {
    DedicatedIPPools []string `json:"DedicatedIpPools,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

