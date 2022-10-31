package shared

type ListFirewallDomainsRequest struct {
	FirewallDomainListID string  `json:"FirewallDomainListId"`
	MaxResults           *int64  `json:"MaxResults,omitempty"`
	NextToken            *string `json:"NextToken,omitempty"`
}
