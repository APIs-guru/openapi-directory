package shared

type FirewallRuleGroupAssociation struct {
	Arn                 *string                                 `json:"Arn"`
	CreationTime        *string                                 `json:"CreationTime"`
	CreatorRequestID    *string                                 `json:"CreatorRequestId"`
	FirewallRuleGroupID *string                                 `json:"FirewallRuleGroupId"`
	ID                  *string                                 `json:"Id"`
	ManagedOwnerName    *string                                 `json:"ManagedOwnerName"`
	ModificationTime    *string                                 `json:"ModificationTime"`
	MutationProtection  *MutationProtectionStatusEnum           `json:"MutationProtection"`
	Name                *string                                 `json:"Name"`
	Priority            *int64                                  `json:"Priority"`
	Status              *FirewallRuleGroupAssociationStatusEnum `json:"Status"`
	StatusMessage       *string                                 `json:"StatusMessage"`
	VpcID               *string                                 `json:"VpcId"`
}
