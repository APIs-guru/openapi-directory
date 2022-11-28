package shared

// FirewallDomainListMetadata
// <p>Minimal high-level information for a firewall domain list. The action <a>ListFirewallDomainLists</a> returns an array of these objects. </p> <p>To retrieve full information for a firewall domain list, call <a>GetFirewallDomainList</a> and <a>ListFirewallDomains</a>.</p>
type FirewallDomainListMetadata struct {
	Arn              *string `json:"Arn,omitempty"`
	CreatorRequestID *string `json:"CreatorRequestId,omitempty"`
	ID               *string `json:"Id,omitempty"`
	ManagedOwnerName *string `json:"ManagedOwnerName,omitempty"`
	Name             *string `json:"Name,omitempty"`
}
