package shared

type UpdateDomainNameserversRequest struct {
	DomainName  string       `json:"DomainName"`
	FiAuthKey   *string      `json:"FIAuthKey"`
	Nameservers []Nameserver `json:"Nameservers"`
}
