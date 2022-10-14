package shared

type ResolverRuleConfig struct {
	Name               *string         `json:"Name,omitempty"`
	ResolverEndpointID *string         `json:"ResolverEndpointId,omitempty"`
	TargetIps          []TargetAddress `json:"TargetIps,omitempty"`
}
