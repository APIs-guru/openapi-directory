package shared

type SearchExpression struct {
	Filters        []Filter             `json:"Filters,omitempty"`
	NestedFilters  []NestedFilters      `json:"NestedFilters,omitempty"`
	Operator       *BooleanOperatorEnum `json:"Operator,omitempty"`
	SubExpressions []SearchExpression   `json:"SubExpressions,omitempty"`
}
