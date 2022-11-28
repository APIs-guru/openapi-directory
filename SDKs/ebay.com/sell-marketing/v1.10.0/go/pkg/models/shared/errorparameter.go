package shared

// ErrorParameter
// A name/value pair that provides parameter details regarding a warning or error condition.
type ErrorParameter struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}
