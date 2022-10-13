package shared

type FilteredBidDetailRow struct {
	BidCount      *MetricValue   `json:"bidCount"`
	Detail        *string        `json:"detail"`
	DetailID      *int32         `json:"detailId"`
	RowDimensions *RowDimensions `json:"rowDimensions"`
}
