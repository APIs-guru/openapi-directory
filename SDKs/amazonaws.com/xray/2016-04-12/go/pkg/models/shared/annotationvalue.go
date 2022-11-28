package shared

// AnnotationValue
// Value of a segment annotation. Has one of three value types: Number, Boolean, or String.
type AnnotationValue struct {
	BooleanValue *bool    `json:"BooleanValue,omitempty"`
	NumberValue  *float64 `json:"NumberValue,omitempty"`
	StringValue  *string  `json:"StringValue,omitempty"`
}
