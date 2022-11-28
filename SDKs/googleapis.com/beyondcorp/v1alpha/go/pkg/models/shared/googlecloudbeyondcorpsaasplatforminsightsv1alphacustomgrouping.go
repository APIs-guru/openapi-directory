package shared

// GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping
// Customised grouping option that allows setting the group_by fields and also the filters togather for a configured insight request.
type GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping struct {
	FieldFilter *string  `json:"fieldFilter,omitempty"`
	GroupFields []string `json:"groupFields,omitempty"`
}
