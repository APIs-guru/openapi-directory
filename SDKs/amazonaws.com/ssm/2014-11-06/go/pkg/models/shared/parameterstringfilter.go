package shared



type ParameterStringFilter struct {
    Key string `json:"Key"`
    Option *string `json:"Option,omitempty"`
    Values []string `json:"Values,omitempty"`
    
}

