package shared

// ProductViewAggregationValue
// A single product view aggregation value/count pair, containing metadata about each product to which the calling user has access.
type ProductViewAggregationValue struct {
	ApproximateCount *int64  `json:"ApproximateCount,omitempty"`
	Value            *string `json:"Value,omitempty"`
}
