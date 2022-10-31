package shared

type AnnotationValue struct {
	BooleanValue *bool    `json:"BooleanValue,omitempty"`
	NumberValue  *float64 `json:"NumberValue,omitempty"`
	StringValue  *string  `json:"StringValue,omitempty"`
}
