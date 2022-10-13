package shared

type NumericValue struct {
	DoubleValue *float64 `json:"doubleValue"`
	Int64Value  *string  `json:"int64Value"`
}
