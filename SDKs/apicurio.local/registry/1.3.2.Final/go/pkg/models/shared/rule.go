package shared

type Rule struct {
	Config string        `json:"config"`
	Type   *RuleTypeEnum `json:"type"`
}
