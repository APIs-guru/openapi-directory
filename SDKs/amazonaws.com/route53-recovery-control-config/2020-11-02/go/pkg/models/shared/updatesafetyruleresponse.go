package shared

type UpdateSafetyRuleResponse struct {
	AssertionRule *AssertionRule `json:"AssertionRule"`
	GatingRule    *GatingRule    `json:"GatingRule"`
}
