package shared

type AssociateResolverRuleRequest struct {
	Name           *string `json:"Name"`
	ResolverRuleID string  `json:"ResolverRuleId"`
	VpcID          string  `json:"VPCId"`
}
