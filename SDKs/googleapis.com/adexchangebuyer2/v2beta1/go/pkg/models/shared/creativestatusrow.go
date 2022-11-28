package shared

// CreativeStatusRow
// The number of bids with the specified dimension values that did not win the auction (either were filtered pre-auction or lost the auction), as described by the specified creative status.
type CreativeStatusRow struct {
	BidCount         *MetricValue   `json:"bidCount,omitempty"`
	CreativeStatusID *int32         `json:"creativeStatusId,omitempty"`
	RowDimensions    *RowDimensions `json:"rowDimensions,omitempty"`
}
