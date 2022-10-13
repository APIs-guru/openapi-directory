package shared

type ResolvedTargets struct {
	ParameterValues []string `json:"ParameterValues"`
	Truncated       *bool    `json:"Truncated"`
}
