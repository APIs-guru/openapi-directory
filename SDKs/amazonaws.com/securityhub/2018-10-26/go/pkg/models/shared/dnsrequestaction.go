package shared

// DNSRequestAction
// Provided if <code>ActionType</code> is <code>DNS_REQUEST</code>. It provides details about the DNS request that was detected.
type DNSRequestAction struct {
	Blocked  *bool   `json:"Blocked,omitempty"`
	Domain   *string `json:"Domain,omitempty"`
	Protocol *string `json:"Protocol,omitempty"`
}
