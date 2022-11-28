package shared

// ResolvedTargets
// Information about targets that resolved during the Automation execution.
type ResolvedTargets struct {
	ParameterValues []string `json:"ParameterValues,omitempty"`
	Truncated       *bool    `json:"Truncated,omitempty"`
}
