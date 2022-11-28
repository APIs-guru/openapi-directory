package shared

// GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight
// The Insight object with configuration that was returned and actual list of records.
type GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight struct {
	AppliedConfig *GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig   `json:"appliedConfig,omitempty"`
	Metadata      *GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata `json:"metadata,omitempty"`
	Name          *string                                                          `json:"name,omitempty"`
	Rows          []GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow            `json:"rows,omitempty"`
}
