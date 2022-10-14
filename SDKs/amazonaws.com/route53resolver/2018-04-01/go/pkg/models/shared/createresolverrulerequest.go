package shared

type CreateResolverRuleRequest struct {
	CreatorRequestID   string             `json:"CreatorRequestId"`
	DomainName         string             `json:"DomainName"`
	Name               *string            `json:"Name,omitempty"`
	ResolverEndpointID *string            `json:"ResolverEndpointId,omitempty"`
	RuleType           RuleTypeOptionEnum `json:"RuleType"`
	Tags               []Tag              `json:"Tags,omitempty"`
	TargetIps          []TargetAddress    `json:"TargetIps,omitempty"`
}
