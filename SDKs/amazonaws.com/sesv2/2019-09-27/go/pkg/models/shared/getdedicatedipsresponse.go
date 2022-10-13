package shared

type GetDedicatedIpsResponse struct {
	DedicatedIps []DedicatedIP `json:"DedicatedIps"`
	NextToken    *string       `json:"NextToken"`
}
