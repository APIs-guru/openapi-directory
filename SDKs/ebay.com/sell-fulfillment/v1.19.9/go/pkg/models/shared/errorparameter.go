package shared

// ErrorParameter
// This type contains the name and value of an input parameter that contributed to a specific error or warning condition.
type ErrorParameter struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}
