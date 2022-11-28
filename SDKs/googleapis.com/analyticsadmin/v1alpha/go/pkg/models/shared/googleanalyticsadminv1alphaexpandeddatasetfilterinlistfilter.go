package shared

// GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter
// A filter for a string dimension that matches a particular list of options.
type GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter struct {
	CaseSensitive *bool    `json:"caseSensitive,omitempty"`
	Values        []string `json:"values,omitempty"`
}
