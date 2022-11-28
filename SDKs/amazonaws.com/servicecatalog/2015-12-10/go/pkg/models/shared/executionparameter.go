package shared

// ExecutionParameter
// Details of an execution parameter value that is passed to a self-service action when executed on a provisioned product.
type ExecutionParameter struct {
	DefaultValues []string `json:"DefaultValues,omitempty"`
	Name          *string  `json:"Name,omitempty"`
	Type          *string  `json:"Type,omitempty"`
}
