package shared

type Rule struct {
	Assertion *AssertionRule `json:"ASSERTION"`
	Gating    *GatingRule    `json:"GATING"`
}
