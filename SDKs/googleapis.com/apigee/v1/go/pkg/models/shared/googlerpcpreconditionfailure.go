package shared

// GoogleRPCPreconditionFailure
// Describes what preconditions have failed. For example, if an RPC failed because it required the Terms of Service to be acknowledged, it could list the terms of service violation in the PreconditionFailure message.
type GoogleRPCPreconditionFailure struct {
	Violations []GoogleRPCPreconditionFailureViolation `json:"violations,omitempty"`
}
