package shared

// GoogleRPCPreconditionFailureViolation
// A message type used to describe a single precondition failure.
type GoogleRPCPreconditionFailureViolation struct {
	Description *string `json:"description,omitempty"`
	Subject     *string `json:"subject,omitempty"`
	Type        *string `json:"type,omitempty"`
}
