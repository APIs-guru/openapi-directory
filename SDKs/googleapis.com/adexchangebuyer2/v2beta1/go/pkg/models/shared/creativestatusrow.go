package shared

type CreativeStatusRow struct {
	BidCount         *MetricValue   `json:"bidCount"`
	CreativeStatusID *int32         `json:"creativeStatusId"`
	RowDimensions    *RowDimensions `json:"rowDimensions"`
}
