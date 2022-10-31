package shared

type FilteredBidCreativeRow struct {
	BidCount      *MetricValue   `json:"bidCount,omitempty"`
	CreativeID    *string        `json:"creativeId,omitempty"`
	RowDimensions *RowDimensions `json:"rowDimensions,omitempty"`
}
