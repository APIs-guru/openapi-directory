package shared

// StatefulRule
// A single 5-tuple stateful rule, for use in a stateful rule group.
type StatefulRule struct {
	Action      StatefulActionEnum `json:"Action"`
	Header      Header             `json:"Header"`
	RuleOptions []RuleOption       `json:"RuleOptions"`
}
