package shared

// StatelessRule
// A single stateless rule. This is used in <a>StatelessRulesAndCustomActions</a>.
type StatelessRule struct {
	Priority       int64          `json:"Priority"`
	RuleDefinition RuleDefinition `json:"RuleDefinition"`
}
