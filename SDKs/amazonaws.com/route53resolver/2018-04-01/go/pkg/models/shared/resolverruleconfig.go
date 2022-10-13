package shared

type ResolverRuleConfig struct {
	Name               *string         `json:"Name"`
	ResolverEndpointID *string         `json:"ResolverEndpointId"`
	TargetIps          []TargetAddress `json:"TargetIps"`
}
