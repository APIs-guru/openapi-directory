package shared

type GoogleAnalyticsAdminV1alphaAccessFilter struct {
	BetweenFilter *GoogleAnalyticsAdminV1alphaAccessBetweenFilter `json:"betweenFilter,omitempty"`
	FieldName     *string                                         `json:"fieldName,omitempty"`
	InListFilter  *GoogleAnalyticsAdminV1alphaAccessInListFilter  `json:"inListFilter,omitempty"`
	NumericFilter *GoogleAnalyticsAdminV1alphaAccessNumericFilter `json:"numericFilter,omitempty"`
	StringFilter  *GoogleAnalyticsAdminV1alphaAccessStringFilter  `json:"stringFilter,omitempty"`
}
