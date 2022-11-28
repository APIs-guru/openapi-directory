package shared

// GetDedicatedIpsResponse
// Information about the dedicated IP addresses that are associated with your Amazon Pinpoint account.
type GetDedicatedIpsResponse struct {
	DedicatedIps []DedicatedIP `json:"DedicatedIps,omitempty"`
	NextToken    *string       `json:"NextToken,omitempty"`
}
