package shared



type PolicyParameter struct {
    Key *string `json:"Key,omitempty"`
    MapEntries []ParameterMapEntry `json:"MapEntries,omitempty"`
    Values []string `json:"Values,omitempty"`
    
}

