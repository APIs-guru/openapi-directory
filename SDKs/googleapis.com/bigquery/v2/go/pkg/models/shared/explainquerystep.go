package shared



type ExplainQueryStep struct {
    Kind *string `json:"kind,omitempty"`
    Substeps []string `json:"substeps,omitempty"`
    
}

