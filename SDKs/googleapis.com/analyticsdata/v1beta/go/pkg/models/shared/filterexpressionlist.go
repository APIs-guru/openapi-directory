package shared

// FilterExpressionList
// A list of filter expressions.
type FilterExpressionList struct {
	Expressions []FilterExpression `json:"expressions,omitempty"`
}
