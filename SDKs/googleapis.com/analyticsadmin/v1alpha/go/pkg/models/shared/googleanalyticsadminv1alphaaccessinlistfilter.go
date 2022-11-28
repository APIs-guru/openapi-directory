package shared

// GoogleAnalyticsAdminV1alphaAccessInListFilter
// The result needs to be in a list of string values.
type GoogleAnalyticsAdminV1alphaAccessInListFilter struct {
	CaseSensitive *bool    `json:"caseSensitive,omitempty"`
	Values        []string `json:"values,omitempty"`
}
