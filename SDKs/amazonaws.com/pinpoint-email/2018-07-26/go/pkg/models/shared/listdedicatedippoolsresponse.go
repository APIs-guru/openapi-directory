package shared

// ListDedicatedIPPoolsResponse
// A list of dedicated IP pools.
type ListDedicatedIPPoolsResponse struct {
	DedicatedIPPools []string `json:"DedicatedIpPools,omitempty"`
	NextToken        *string  `json:"NextToken,omitempty"`
}
