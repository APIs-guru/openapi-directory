package shared

type Field struct {
	BlobValue    *string  `json:"blobValue"`
	BooleanValue *bool    `json:"booleanValue"`
	DoubleValue  *float64 `json:"doubleValue"`
	IsNull       *bool    `json:"isNull"`
	LongValue    *int64   `json:"longValue"`
	StringValue  *string  `json:"stringValue"`
}
