package shared

type AnnotationValue struct {
	BooleanValue *bool    `json:"BooleanValue"`
	NumberValue  *float64 `json:"NumberValue"`
	StringValue  *string  `json:"StringValue"`
}
