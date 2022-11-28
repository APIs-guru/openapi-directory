package shared

// NumericValue
// To represent a number.
type NumericValue struct {
	DoubleValue *float64 `json:"doubleValue,omitempty"`
	Int64Value  *string  `json:"int64Value,omitempty"`
}
