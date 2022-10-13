package shared

type CreateFirewallRuleRequest struct {
	Action               ActionEnum                `json:"Action"`
	BlockOverrideDNSType *BlockOverrideDNSTypeEnum `json:"BlockOverrideDnsType"`
	BlockOverrideDomain  *string                   `json:"BlockOverrideDomain"`
	BlockOverrideTTL     *int64                    `json:"BlockOverrideTtl"`
	BlockResponse        *BlockResponseEnum        `json:"BlockResponse"`
	CreatorRequestID     string                    `json:"CreatorRequestId"`
	FirewallDomainListID string                    `json:"FirewallDomainListId"`
	FirewallRuleGroupID  string                    `json:"FirewallRuleGroupId"`
	Name                 string                    `json:"Name"`
	Priority             int64                     `json:"Priority"`
}
