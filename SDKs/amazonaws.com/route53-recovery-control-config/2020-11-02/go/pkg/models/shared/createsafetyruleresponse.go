package shared

type CreateSafetyRuleResponse struct {
	AssertionRule *AssertionRule `json:"AssertionRule"`
	GatingRule    *GatingRule    `json:"GatingRule"`
}
