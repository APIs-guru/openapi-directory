package shared

type ListDomainsResponse struct {
	Domains   []DomainSummary `json:"Domains"`
	NextToken *string         `json:"NextToken"`
}
