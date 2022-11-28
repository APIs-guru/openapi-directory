package shared

// GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse
// The response for the list of insights.
type GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse struct {
	Insights      []GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight `json:"insights,omitempty"`
	NextPageToken *string                                                   `json:"nextPageToken,omitempty"`
}
