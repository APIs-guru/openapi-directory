package shared

type UpdateDomainNameserversRequest struct {
	DomainName  string       `json:"DomainName"`
	FiAuthKey   *string      `json:"FIAuthKey,omitempty"`
	Nameservers []Nameserver `json:"Nameservers"`
}
