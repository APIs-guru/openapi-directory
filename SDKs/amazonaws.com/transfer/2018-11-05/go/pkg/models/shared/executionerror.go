package shared

// ExecutionError
// Specifies the error message and type, for an error that occurs during the execution of the workflow.
type ExecutionError struct {
	Message string                 `json:"Message"`
	Type    ExecutionErrorTypeEnum `json:"Type"`
}
