package shared

// ErrorParameter
// Container for a error parameter.
type ErrorParameter struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}
