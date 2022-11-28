package shared

// FirewallRuleGroupMetadata
// <p>Minimal high-level information for a firewall rule group. The action <a>ListFirewallRuleGroups</a> returns an array of these objects. </p> <p>To retrieve full information for a firewall rule group, call <a>GetFirewallRuleGroup</a> and <a>ListFirewallRules</a>.</p>
type FirewallRuleGroupMetadata struct {
	Arn              *string          `json:"Arn,omitempty"`
	CreatorRequestID *string          `json:"CreatorRequestId,omitempty"`
	ID               *string          `json:"Id,omitempty"`
	Name             *string          `json:"Name,omitempty"`
	OwnerID          *string          `json:"OwnerId,omitempty"`
	ShareStatus      *ShareStatusEnum `json:"ShareStatus,omitempty"`
}
