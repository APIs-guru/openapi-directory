package shared

type StatelessRule struct {
	Priority       int64          `json:"Priority"`
	RuleDefinition RuleDefinition `json:"RuleDefinition"`
}
