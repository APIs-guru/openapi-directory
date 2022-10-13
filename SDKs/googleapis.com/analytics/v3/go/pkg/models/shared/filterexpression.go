package shared

type FilterExpression struct {
	CaseSensitive   *bool   `json:"caseSensitive"`
	ExpressionValue *string `json:"expressionValue"`
	Field           *string `json:"field"`
	FieldIndex      *int32  `json:"fieldIndex"`
	Kind            *string `json:"kind"`
	MatchType       *string `json:"matchType"`
}
