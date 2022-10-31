package shared



type GetDedicatedIpsResponse struct {
    DedicatedIps []DedicatedIP `json:"DedicatedIps,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

