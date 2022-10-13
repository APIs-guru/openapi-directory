package shared

type CreateResolverRuleRequest struct {
	CreatorRequestID   string             `json:"CreatorRequestId"`
	DomainName         string             `json:"DomainName"`
	Name               *string            `json:"Name"`
	ResolverEndpointID *string            `json:"ResolverEndpointId"`
	RuleType           RuleTypeOptionEnum `json:"RuleType"`
	Tags               []Tag              `json:"Tags"`
	TargetIps          []TargetAddress    `json:"TargetIps"`
}
