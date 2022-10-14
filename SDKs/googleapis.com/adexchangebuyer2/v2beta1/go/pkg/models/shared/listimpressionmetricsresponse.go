package shared

type ListImpressionMetricsResponse struct {
	ImpressionMetricsRows []ImpressionMetricsRow `json:"impressionMetricsRows,omitempty"`
	NextPageToken         *string                `json:"nextPageToken,omitempty"`
}
