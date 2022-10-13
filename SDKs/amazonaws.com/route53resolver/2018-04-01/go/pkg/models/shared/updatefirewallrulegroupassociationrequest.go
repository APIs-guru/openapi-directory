package shared

type UpdateFirewallRuleGroupAssociationRequest struct {
	FirewallRuleGroupAssociationID string                        `json:"FirewallRuleGroupAssociationId"`
	MutationProtection             *MutationProtectionStatusEnum `json:"MutationProtection"`
	Name                           *string                       `json:"Name"`
	Priority                       *int64                        `json:"Priority"`
}
