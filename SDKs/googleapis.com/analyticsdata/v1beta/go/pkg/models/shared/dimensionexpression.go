package shared

// DimensionExpression
// Used to express a dimension which is the result of a formula of multiple dimensions. Example usages: 1) lower_case(dimension) 2) concatenate(dimension1, symbol, dimension2).
type DimensionExpression struct {
	Concatenate *ConcatenateExpression `json:"concatenate,omitempty"`
	LowerCase   *CaseExpression        `json:"lowerCase,omitempty"`
	UpperCase   *CaseExpression        `json:"upperCase,omitempty"`
}
