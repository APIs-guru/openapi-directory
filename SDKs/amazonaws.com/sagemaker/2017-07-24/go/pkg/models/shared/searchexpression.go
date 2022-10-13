package shared

type SearchExpression struct {
	Filters        []Filter             `json:"Filters"`
	NestedFilters  []NestedFilters      `json:"NestedFilters"`
	Operator       *BooleanOperatorEnum `json:"Operator"`
	SubExpressions []SearchExpression   `json:"SubExpressions"`
}
