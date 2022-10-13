package shared

type DisassociateResolverRuleRequest struct {
	ResolverRuleID string `json:"ResolverRuleId"`
	VpcID          string `json:"VPCId"`
}
