package shared

type Dimension struct {
	DimensionExpression *DimensionExpression `json:"dimensionExpression"`
	Name                *string              `json:"name"`
}
