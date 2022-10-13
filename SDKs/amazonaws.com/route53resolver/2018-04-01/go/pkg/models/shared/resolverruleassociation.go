package shared

type ResolverRuleAssociation struct {
	ID             *string                            `json:"Id"`
	Name           *string                            `json:"Name"`
	ResolverRuleID *string                            `json:"ResolverRuleId"`
	Status         *ResolverRuleAssociationStatusEnum `json:"Status"`
	StatusMessage  *string                            `json:"StatusMessage"`
	VpcID          *string                            `json:"VPCId"`
}
