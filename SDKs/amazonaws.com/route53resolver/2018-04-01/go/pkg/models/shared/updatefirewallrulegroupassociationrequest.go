package shared

type UpdateFirewallRuleGroupAssociationRequest struct {
	FirewallRuleGroupAssociationID string                        `json:"FirewallRuleGroupAssociationId"`
	MutationProtection             *MutationProtectionStatusEnum `json:"MutationProtection,omitempty"`
	Name                           *string                       `json:"Name,omitempty"`
	Priority                       *int64                        `json:"Priority,omitempty"`
}
