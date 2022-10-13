package shared

type ImpressionMetricsRow struct {
	AvailableImpressions *MetricValue   `json:"availableImpressions"`
	BidRequests          *MetricValue   `json:"bidRequests"`
	InventoryMatches     *MetricValue   `json:"inventoryMatches"`
	ResponsesWithBids    *MetricValue   `json:"responsesWithBids"`
	RowDimensions        *RowDimensions `json:"rowDimensions"`
	SuccessfulResponses  *MetricValue   `json:"successfulResponses"`
}
