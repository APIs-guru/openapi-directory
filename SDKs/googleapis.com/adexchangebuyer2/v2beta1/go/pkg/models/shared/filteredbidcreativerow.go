package shared

type FilteredBidCreativeRow struct {
	BidCount      *MetricValue   `json:"bidCount"`
	CreativeID    *string        `json:"creativeId"`
	RowDimensions *RowDimensions `json:"rowDimensions"`
}
