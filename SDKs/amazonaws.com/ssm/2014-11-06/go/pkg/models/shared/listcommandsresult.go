package shared



type ListCommandsResult struct {
    Commands []Command `json:"Commands,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

