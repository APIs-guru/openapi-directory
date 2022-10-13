package shared

type DescribeSafetyRuleResponse struct {
	AssertionRule *AssertionRule `json:"AssertionRule"`
	GatingRule    *GatingRule    `json:"GatingRule"`
}
