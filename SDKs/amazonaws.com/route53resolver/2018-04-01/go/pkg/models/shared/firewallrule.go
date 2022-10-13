package shared

type FirewallRule struct {
	Action               *ActionEnum               `json:"Action"`
	BlockOverrideDNSType *BlockOverrideDNSTypeEnum `json:"BlockOverrideDnsType"`
	BlockOverrideDomain  *string                   `json:"BlockOverrideDomain"`
	BlockOverrideTTL     *int64                    `json:"BlockOverrideTtl"`
	BlockResponse        *BlockResponseEnum        `json:"BlockResponse"`
	CreationTime         *string                   `json:"CreationTime"`
	CreatorRequestID     *string                   `json:"CreatorRequestId"`
	FirewallDomainListID *string                   `json:"FirewallDomainListId"`
	FirewallRuleGroupID  *string                   `json:"FirewallRuleGroupId"`
	ModificationTime     *string                   `json:"ModificationTime"`
	Name                 *string                   `json:"Name"`
	Priority             *int64                    `json:"Priority"`
}
