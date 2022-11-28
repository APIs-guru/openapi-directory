package shared

// ErrorParameter
// A complex type that defines an error and error message.
type ErrorParameter struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}
