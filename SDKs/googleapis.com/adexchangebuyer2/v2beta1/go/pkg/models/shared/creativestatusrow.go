package shared

type CreativeStatusRow struct {
	BidCount         *MetricValue   `json:"bidCount,omitempty"`
	CreativeStatusID *int32         `json:"creativeStatusId,omitempty"`
	RowDimensions    *RowDimensions `json:"rowDimensions,omitempty"`
}
