package shared

// GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter
// A filter for a string dimension that matches a particular list of options.
type GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter struct {
	CaseSensitive *bool    `json:"caseSensitive,omitempty"`
	Values        []string `json:"values,omitempty"`
}
