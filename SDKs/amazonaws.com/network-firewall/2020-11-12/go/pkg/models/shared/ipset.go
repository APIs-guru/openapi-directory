package shared

// IPSet
// A list of IP addresses and address ranges, in CIDR notation. This is part of a <a>RuleVariables</a>.
type IPSet struct {
	Definition []string `json:"Definition"`
}
