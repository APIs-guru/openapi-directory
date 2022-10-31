package shared



type JobStatus struct {
    ErrorResult *ErrorProto `json:"errorResult,omitempty"`
    Errors []ErrorProto `json:"errors,omitempty"`
    State *string `json:"state,omitempty"`
    
}

