package shared

// RuleVariables
// Settings that are available for use in the rules in the <a>RuleGroup</a> where this is defined.
type RuleVariables struct {
	IPSets   map[string]IPSet   `json:"IPSets,omitempty"`
	PortSets map[string]PortSet `json:"PortSets,omitempty"`
}
