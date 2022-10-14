package shared

type FilteredBidDetailRow struct {
	BidCount      *MetricValue   `json:"bidCount,omitempty"`
	Detail        *string        `json:"detail,omitempty"`
	DetailID      *int32         `json:"detailId,omitempty"`
	RowDimensions *RowDimensions `json:"rowDimensions,omitempty"`
}
