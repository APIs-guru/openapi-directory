package shared

type FilterExpression struct {
	AndGroup      *FilterExpressionList `json:"andGroup,omitempty"`
	Filter        *Filter               `json:"filter,omitempty"`
	NotExpression *FilterExpression     `json:"notExpression,omitempty"`
	OrGroup       *FilterExpressionList `json:"orGroup,omitempty"`
}
