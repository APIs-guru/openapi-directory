package shared

type ListDomainsResponse struct {
	Domains   []DomainDetails `json:"Domains"`
	NextToken *string         `json:"NextToken"`
}
