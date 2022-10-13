package shared

type ListFirewallRuleGroupAssociationsRequest struct {
	FirewallRuleGroupID *string                                 `json:"FirewallRuleGroupId"`
	MaxResults          *int64                                  `json:"MaxResults"`
	NextToken           *string                                 `json:"NextToken"`
	Priority            *int64                                  `json:"Priority"`
	Status              *FirewallRuleGroupAssociationStatusEnum `json:"Status"`
	VpcID               *string                                 `json:"VpcId"`
}
