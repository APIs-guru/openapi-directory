package shared

type GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse struct {
	Insights      []GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight `json:"insights"`
	NextPageToken *string                                                   `json:"nextPageToken"`
}
