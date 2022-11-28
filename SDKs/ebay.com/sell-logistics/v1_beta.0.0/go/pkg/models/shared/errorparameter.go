package shared

// ErrorParameter
// Container for an error parameter.
type ErrorParameter struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}
