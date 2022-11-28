package shared

// ParameterNameValue
// Describes a name-value pair that is used to update the value of a parameter.
type ParameterNameValue struct {
	ParameterName  *string `json:"ParameterName,omitempty"`
	ParameterValue *string `json:"ParameterValue,omitempty"`
}
