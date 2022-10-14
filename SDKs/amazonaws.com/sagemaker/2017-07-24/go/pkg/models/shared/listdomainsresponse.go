package shared

type ListDomainsResponse struct {
	Domains   []DomainDetails `json:"Domains,omitempty"`
	NextToken *string         `json:"NextToken,omitempty"`
}
