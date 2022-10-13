package shared

type ListFirewallDomainsRequest struct {
	FirewallDomainListID string  `json:"FirewallDomainListId"`
	MaxResults           *int64  `json:"MaxResults"`
	NextToken            *string `json:"NextToken"`
}
