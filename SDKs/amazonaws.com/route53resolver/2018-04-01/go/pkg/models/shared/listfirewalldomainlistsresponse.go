package shared

type ListFirewallDomainListsResponse struct {
	FirewallDomainLists []FirewallDomainListMetadata `json:"FirewallDomainLists"`
	NextToken           *string                      `json:"NextToken"`
}
