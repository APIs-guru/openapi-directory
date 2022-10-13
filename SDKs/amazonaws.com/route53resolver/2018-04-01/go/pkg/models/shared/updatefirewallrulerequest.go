package shared

type UpdateFirewallRuleRequest struct {
	Action               *ActionEnum               `json:"Action"`
	BlockOverrideDNSType *BlockOverrideDNSTypeEnum `json:"BlockOverrideDnsType"`
	BlockOverrideDomain  *string                   `json:"BlockOverrideDomain"`
	BlockOverrideTTL     *int64                    `json:"BlockOverrideTtl"`
	BlockResponse        *BlockResponseEnum        `json:"BlockResponse"`
	FirewallDomainListID string                    `json:"FirewallDomainListId"`
	FirewallRuleGroupID  string                    `json:"FirewallRuleGroupId"`
	Name                 *string                   `json:"Name"`
	Priority             *int64                    `json:"Priority"`
}
