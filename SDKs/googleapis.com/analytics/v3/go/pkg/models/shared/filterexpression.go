package shared

// FilterExpression
// JSON template for an Analytics filter expression.
type FilterExpression struct {
	CaseSensitive   *bool   `json:"caseSensitive,omitempty"`
	ExpressionValue *string `json:"expressionValue,omitempty"`
	Field           *string `json:"field,omitempty"`
	FieldIndex      *int32  `json:"fieldIndex,omitempty"`
	Kind            *string `json:"kind,omitempty"`
	MatchType       *string `json:"matchType,omitempty"`
}
