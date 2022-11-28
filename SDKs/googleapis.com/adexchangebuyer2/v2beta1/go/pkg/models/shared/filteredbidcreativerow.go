package shared

// FilteredBidCreativeRow
// The number of filtered bids with the specified dimension values that have the specified creative.
type FilteredBidCreativeRow struct {
	BidCount      *MetricValue   `json:"bidCount,omitempty"`
	CreativeID    *string        `json:"creativeId,omitempty"`
	RowDimensions *RowDimensions `json:"rowDimensions,omitempty"`
}
