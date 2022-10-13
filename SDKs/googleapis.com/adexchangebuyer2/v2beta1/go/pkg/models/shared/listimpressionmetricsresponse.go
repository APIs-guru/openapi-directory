package shared

type ListImpressionMetricsResponse struct {
	ImpressionMetricsRows []ImpressionMetricsRow `json:"impressionMetricsRows"`
	NextPageToken         *string                `json:"nextPageToken"`
}
