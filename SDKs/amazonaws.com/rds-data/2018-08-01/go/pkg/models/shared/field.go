package shared

type Field struct {
	ArrayValue   *ArrayValue `json:"arrayValue,omitempty"`
	BlobValue    *string     `json:"blobValue,omitempty"`
	BooleanValue *bool       `json:"booleanValue,omitempty"`
	DoubleValue  *float64    `json:"doubleValue,omitempty"`
	IsNull       *bool       `json:"isNull,omitempty"`
	LongValue    *int64      `json:"longValue,omitempty"`
	StringValue  *string     `json:"stringValue,omitempty"`
}
