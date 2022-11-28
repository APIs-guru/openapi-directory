package shared

// FilteredBidDetailRow
// The number of filtered bids with the specified dimension values, among those filtered due to the requested filtering reason (for example, creative status), that have the specified detail.
type FilteredBidDetailRow struct {
	BidCount      *MetricValue   `json:"bidCount,omitempty"`
	Detail        *string        `json:"detail,omitempty"`
	DetailID      *int32         `json:"detailId,omitempty"`
	RowDimensions *RowDimensions `json:"rowDimensions,omitempty"`
}
