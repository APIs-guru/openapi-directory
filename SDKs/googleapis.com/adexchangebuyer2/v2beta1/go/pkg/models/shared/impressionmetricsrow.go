package shared

type ImpressionMetricsRow struct {
	AvailableImpressions *MetricValue   `json:"availableImpressions,omitempty"`
	BidRequests          *MetricValue   `json:"bidRequests,omitempty"`
	InventoryMatches     *MetricValue   `json:"inventoryMatches,omitempty"`
	ResponsesWithBids    *MetricValue   `json:"responsesWithBids,omitempty"`
	RowDimensions        *RowDimensions `json:"rowDimensions,omitempty"`
	SuccessfulResponses  *MetricValue   `json:"successfulResponses,omitempty"`
}
