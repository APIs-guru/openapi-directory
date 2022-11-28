package shared

// Dimension
// Dimensions are attributes of your data. For example, the dimension city indicates the city from which an event originates. Dimension values in report responses are strings; for example, the city could be "Paris" or "New York". Requests are allowed up to 9 dimensions.
type Dimension struct {
	DimensionExpression *DimensionExpression `json:"dimensionExpression,omitempty"`
	Name                *string              `json:"name,omitempty"`
}
