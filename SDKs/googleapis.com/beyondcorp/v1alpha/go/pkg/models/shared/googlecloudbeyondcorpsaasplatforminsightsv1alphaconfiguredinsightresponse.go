package shared

type GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse struct {
	AppliedConfig *GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig `json:"appliedConfig,omitempty"`
	NextPageToken *string                                                        `json:"nextPageToken,omitempty"`
	Rows          []GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow          `json:"rows,omitempty"`
}
