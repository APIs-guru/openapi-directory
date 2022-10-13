package shared

type GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight struct {
	AppliedConfig *GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig   `json:"appliedConfig"`
	Metadata      *GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata `json:"metadata"`
	Name          *string                                                          `json:"name"`
	Rows          []GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow            `json:"rows"`
}
