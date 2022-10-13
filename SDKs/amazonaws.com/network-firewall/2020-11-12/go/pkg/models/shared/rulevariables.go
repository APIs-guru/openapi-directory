package shared

type RuleVariables struct {
	IPSets   map[string]IPSet   `json:"IPSets"`
	PortSets map[string]PortSet `json:"PortSets"`
}
