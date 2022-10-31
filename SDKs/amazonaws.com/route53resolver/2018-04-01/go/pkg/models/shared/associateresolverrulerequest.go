package shared



type AssociateResolverRuleRequest struct {
    Name *string `json:"Name,omitempty"`
    ResolverRuleID string `json:"ResolverRuleId"`
    VpcID string `json:"VPCId"`
    
}

