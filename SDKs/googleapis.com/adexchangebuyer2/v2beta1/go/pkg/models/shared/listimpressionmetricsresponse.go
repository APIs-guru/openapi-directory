package shared

// ListImpressionMetricsResponse
// Response message for listing the metrics that are measured in number of impressions.
type ListImpressionMetricsResponse struct {
	ImpressionMetricsRows []ImpressionMetricsRow `json:"impressionMetricsRows,omitempty"`
	NextPageToken         *string                `json:"nextPageToken,omitempty"`
}
