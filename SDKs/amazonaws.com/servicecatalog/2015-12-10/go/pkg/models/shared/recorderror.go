package shared

// RecordError
// The error code and description resulting from an operation.
type RecordError struct {
	Code        *string `json:"Code,omitempty"`
	Description *string `json:"Description,omitempty"`
}
