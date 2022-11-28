package shared

// ErrorParameter
// A complex type that indicates a parameter that caused an error and the value of the parameter which caused the error.
type ErrorParameter struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}
