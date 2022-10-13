package shared

type ListFirewallDomainsResponse struct {
	Domains   []string `json:"Domains"`
	NextToken *string  `json:"NextToken"`
}
