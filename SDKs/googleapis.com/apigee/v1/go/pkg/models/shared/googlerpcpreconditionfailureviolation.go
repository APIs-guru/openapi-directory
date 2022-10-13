package shared

type GoogleRPCPreconditionFailureViolation struct {
	Description *string `json:"description"`
	Subject     *string `json:"subject"`
	Type        *string `json:"type"`
}
