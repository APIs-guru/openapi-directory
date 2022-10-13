package shared

type Value struct {
	ArrayValues []Value      `json:"arrayValues"`
	BigIntValue *int64       `json:"bigIntValue"`
	BitValue    *bool        `json:"bitValue"`
	BlobValue   *string      `json:"blobValue"`
	DoubleValue *float64     `json:"doubleValue"`
	IntValue    *int64       `json:"intValue"`
	IsNull      *bool        `json:"isNull"`
	RealValue   *float32     `json:"realValue"`
	StringValue *string      `json:"stringValue"`
	StructValue *StructValue `json:"structValue"`
}
