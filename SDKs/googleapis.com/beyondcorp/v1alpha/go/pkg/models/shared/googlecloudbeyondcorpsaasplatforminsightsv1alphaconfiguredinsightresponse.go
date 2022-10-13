package shared

type GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse struct {
	AppliedConfig *GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig `json:"appliedConfig"`
	NextPageToken *string                                                        `json:"nextPageToken"`
	Rows          []GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow          `json:"rows"`
}
