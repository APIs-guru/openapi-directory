package shared

type RuleConfig struct {
	Inverted  bool         `json:"Inverted"`
	Threshold int64        `json:"Threshold"`
	Type      RuleTypeEnum `json:"Type"`
}
