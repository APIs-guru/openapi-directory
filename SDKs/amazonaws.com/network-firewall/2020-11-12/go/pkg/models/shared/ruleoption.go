package shared

// RuleOption
// Additional settings for a stateful rule. This is part of the <a>StatefulRule</a> configuration.
type RuleOption struct {
	Keyword  string   `json:"Keyword"`
	Settings []string `json:"Settings,omitempty"`
}
