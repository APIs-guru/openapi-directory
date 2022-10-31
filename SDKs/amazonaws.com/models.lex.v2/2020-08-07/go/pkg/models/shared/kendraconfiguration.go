package shared



type KendraConfiguration struct {
    KendraIndex string `json:"kendraIndex"`
    QueryFilterString *string `json:"queryFilterString,omitempty"`
    QueryFilterStringEnabled *bool `json:"queryFilterStringEnabled,omitempty"`
    
}

