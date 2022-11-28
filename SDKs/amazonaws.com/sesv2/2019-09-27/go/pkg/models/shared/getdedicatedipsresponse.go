package shared

// GetDedicatedIpsResponse
// Information about the dedicated IP addresses that are associated with your AWS account.
type GetDedicatedIpsResponse struct {
	DedicatedIps []DedicatedIP `json:"DedicatedIps,omitempty"`
	NextToken    *string       `json:"NextToken,omitempty"`
}
