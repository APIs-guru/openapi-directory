package shared

// GoogleAnalyticsAdminV1alphaExpandedDataSetFilter
// A specific filter for a single dimension
type GoogleAnalyticsAdminV1alphaExpandedDataSetFilter struct {
	FieldName    *string                                                       `json:"fieldName,omitempty"`
	InListFilter *GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter `json:"inListFilter,omitempty"`
	StringFilter *GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter `json:"stringFilter,omitempty"`
}
