package shared

type FilterExpression struct {
	AndGroup      *FilterExpressionList `json:"andGroup"`
	Filter        *Filter               `json:"filter"`
	NotExpression *FilterExpression     `json:"notExpression"`
	OrGroup       *FilterExpressionList `json:"orGroup"`
}
