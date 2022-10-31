package shared



type StopExecutionInput struct {
    Cause *string `json:"cause,omitempty"`
    Error *string `json:"error,omitempty"`
    ExecutionArn string `json:"executionArn"`
    
}

