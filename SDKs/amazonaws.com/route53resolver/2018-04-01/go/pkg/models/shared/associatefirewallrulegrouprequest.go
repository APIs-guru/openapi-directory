package shared

type AssociateFirewallRuleGroupRequest struct {
	CreatorRequestID    string                        `json:"CreatorRequestId"`
	FirewallRuleGroupID string                        `json:"FirewallRuleGroupId"`
	MutationProtection  *MutationProtectionStatusEnum `json:"MutationProtection"`
	Name                string                        `json:"Name"`
	Priority            int64                         `json:"Priority"`
	Tags                []Tag                         `json:"Tags"`
	VpcID               string                        `json:"VpcId"`
}
