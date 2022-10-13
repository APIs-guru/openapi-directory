package shared

type ListDedicatedIPPoolsResponse struct {
	DedicatedIPPools []string `json:"DedicatedIpPools"`
	NextToken        *string  `json:"NextToken"`
}
