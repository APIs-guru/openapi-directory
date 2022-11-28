package shared

// UpdateDomainNameserversRequest
// <p>Replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p> <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email. </p>
type UpdateDomainNameserversRequest struct {
	DomainName  string       `json:"DomainName"`
	FiAuthKey   *string      `json:"FIAuthKey,omitempty"`
	Nameservers []Nameserver `json:"Nameservers"`
}
