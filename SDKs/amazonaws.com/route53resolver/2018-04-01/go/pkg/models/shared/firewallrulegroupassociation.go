package shared

// FirewallRuleGroupAssociation
// An association between a firewall rule group and a VPC, which enables DNS filtering for the VPC.
type FirewallRuleGroupAssociation struct {
	Arn                 *string                                 `json:"Arn,omitempty"`
	CreationTime        *string                                 `json:"CreationTime,omitempty"`
	CreatorRequestID    *string                                 `json:"CreatorRequestId,omitempty"`
	FirewallRuleGroupID *string                                 `json:"FirewallRuleGroupId,omitempty"`
	ID                  *string                                 `json:"Id,omitempty"`
	ManagedOwnerName    *string                                 `json:"ManagedOwnerName,omitempty"`
	ModificationTime    *string                                 `json:"ModificationTime,omitempty"`
	MutationProtection  *MutationProtectionStatusEnum           `json:"MutationProtection,omitempty"`
	Name                *string                                 `json:"Name,omitempty"`
	Priority            *int64                                  `json:"Priority,omitempty"`
	Status              *FirewallRuleGroupAssociationStatusEnum `json:"Status,omitempty"`
	StatusMessage       *string                                 `json:"StatusMessage,omitempty"`
	VpcID               *string                                 `json:"VpcId,omitempty"`
}
