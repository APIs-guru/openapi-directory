package shared

// RuleConfig
// The rule configuration for an assertion rule. That is, the criteria that you set for specific assertion controls (routing controls) that specify how many controls must be enabled after a transaction completes.
type RuleConfig struct {
	Inverted  bool         `json:"Inverted"`
	Threshold int64        `json:"Threshold"`
	Type      RuleTypeEnum `json:"Type"`
}
