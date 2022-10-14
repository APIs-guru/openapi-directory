package shared

type ResolvedTargets struct {
	ParameterValues []string `json:"ParameterValues,omitempty"`
	Truncated       *bool    `json:"Truncated,omitempty"`
}
