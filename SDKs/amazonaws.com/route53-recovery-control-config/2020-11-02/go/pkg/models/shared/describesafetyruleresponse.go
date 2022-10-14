package shared

type DescribeSafetyRuleResponse struct {
	AssertionRule *AssertionRule `json:"AssertionRule,omitempty"`
	GatingRule    *GatingRule    `json:"GatingRule,omitempty"`
}
