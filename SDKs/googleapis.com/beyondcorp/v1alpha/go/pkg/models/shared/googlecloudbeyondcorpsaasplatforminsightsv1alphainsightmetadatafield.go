package shared

// GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField
// Field metadata. Commonly understandable name and description for the field. Multiple such fields constitute the Insight.
type GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField struct {
	Description *string `json:"description,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	FilterAlias *string `json:"filterAlias,omitempty"`
	Filterable  *bool   `json:"filterable,omitempty"`
	Groupable   *bool   `json:"groupable,omitempty"`
	ID          *string `json:"id,omitempty"`
}
