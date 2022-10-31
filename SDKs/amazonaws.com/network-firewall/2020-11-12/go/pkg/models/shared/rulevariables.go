package shared



type RuleVariables struct {
    IPSets map[string]IPSet `json:"IPSets,omitempty"`
    PortSets map[string]PortSet `json:"PortSets,omitempty"`
    
}

