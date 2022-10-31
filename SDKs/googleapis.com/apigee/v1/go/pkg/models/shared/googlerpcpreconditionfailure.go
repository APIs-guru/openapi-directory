package shared



type GoogleRPCPreconditionFailure struct {
    Violations []GoogleRPCPreconditionFailureViolation `json:"violations,omitempty"`
    
}

