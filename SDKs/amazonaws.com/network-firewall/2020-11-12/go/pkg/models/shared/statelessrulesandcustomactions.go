package shared

// StatelessRulesAndCustomActions
// Stateless inspection criteria. Each stateless rule group uses exactly one of these data types to define its stateless rules.
type StatelessRulesAndCustomActions struct {
	CustomActions  []CustomAction  `json:"CustomActions,omitempty"`
	StatelessRules []StatelessRule `json:"StatelessRules"`
}
