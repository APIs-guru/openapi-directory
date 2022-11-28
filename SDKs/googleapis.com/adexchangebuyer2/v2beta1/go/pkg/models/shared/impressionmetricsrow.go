package shared

// ImpressionMetricsRow
// The set of metrics that are measured in numbers of impressions, representing how many impressions with the specified dimension values were considered eligible at each stage of the bidding funnel.
type ImpressionMetricsRow struct {
	AvailableImpressions *MetricValue   `json:"availableImpressions,omitempty"`
	BidRequests          *MetricValue   `json:"bidRequests,omitempty"`
	InventoryMatches     *MetricValue   `json:"inventoryMatches,omitempty"`
	ResponsesWithBids    *MetricValue   `json:"responsesWithBids,omitempty"`
	RowDimensions        *RowDimensions `json:"rowDimensions,omitempty"`
	SuccessfulResponses  *MetricValue   `json:"successfulResponses,omitempty"`
}
