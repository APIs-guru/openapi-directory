package shared

type ListFirewallsResponse struct {
	Firewalls []FirewallMetadata `json:"Firewalls"`
	NextToken *string            `json:"NextToken"`
}
