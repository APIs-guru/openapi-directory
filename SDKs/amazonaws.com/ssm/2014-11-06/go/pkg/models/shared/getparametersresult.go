package shared



type GetParametersResult struct {
    InvalidParameters []string `json:"InvalidParameters,omitempty"`
    Parameters []Parameter `json:"Parameters,omitempty"`
    
}

