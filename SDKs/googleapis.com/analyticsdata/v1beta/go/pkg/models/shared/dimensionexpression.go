package shared

type DimensionExpression struct {
	Concatenate *ConcatenateExpression `json:"concatenate"`
	LowerCase   *CaseExpression        `json:"lowerCase"`
	UpperCase   *CaseExpression        `json:"upperCase"`
}
