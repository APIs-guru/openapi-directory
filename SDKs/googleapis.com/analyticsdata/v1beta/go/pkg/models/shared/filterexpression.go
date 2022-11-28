package shared

// FilterExpression
// To express dimension or metric filters. The fields in the same FilterExpression need to be either all dimensions or all metrics.
type FilterExpression struct {
	AndGroup      *FilterExpressionList `json:"andGroup,omitempty"`
	Filter        *Filter               `json:"filter,omitempty"`
	NotExpression *FilterExpression     `json:"notExpression,omitempty"`
	OrGroup       *FilterExpressionList `json:"orGroup,omitempty"`
}
