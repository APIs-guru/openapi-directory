package shared

// Rule
// A safety rule. A safety rule can be an assertion rule or a gating rule.
type Rule struct {
	Assertion *AssertionRule `json:"ASSERTION,omitempty"`
	Gating    *GatingRule    `json:"GATING,omitempty"`
}
