package shared



type InListFilter struct {
    CaseSensitive *bool `json:"caseSensitive,omitempty"`
    Values []string `json:"values,omitempty"`
    
}

