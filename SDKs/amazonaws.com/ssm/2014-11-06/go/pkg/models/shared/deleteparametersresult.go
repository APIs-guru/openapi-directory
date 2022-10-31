package shared



type DeleteParametersResult struct {
    DeletedParameters []string `json:"DeletedParameters,omitempty"`
    InvalidParameters []string `json:"InvalidParameters,omitempty"`
    
}

