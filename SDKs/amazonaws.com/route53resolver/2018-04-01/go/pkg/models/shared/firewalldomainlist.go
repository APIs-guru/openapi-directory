package shared

// FirewallDomainList
// <p>High-level information about a list of firewall domains for use in a <a>FirewallRule</a>. This is returned by <a>GetFirewallDomainList</a>.</p> <p>To retrieve the domains that are defined for this domain list, call <a>ListFirewallDomains</a>.</p>
type FirewallDomainList struct {
	Arn              *string                       `json:"Arn,omitempty"`
	CreationTime     *string                       `json:"CreationTime,omitempty"`
	CreatorRequestID *string                       `json:"CreatorRequestId,omitempty"`
	DomainCount      *int64                        `json:"DomainCount,omitempty"`
	ID               *string                       `json:"Id,omitempty"`
	ManagedOwnerName *string                       `json:"ManagedOwnerName,omitempty"`
	ModificationTime *string                       `json:"ModificationTime,omitempty"`
	Name             *string                       `json:"Name,omitempty"`
	Status           *FirewallDomainListStatusEnum `json:"Status,omitempty"`
	StatusMessage    *string                       `json:"StatusMessage,omitempty"`
}
