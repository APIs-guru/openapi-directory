package shared

type GoogleAnalyticsAdminV1alphaAccessFilter struct {
	BetweenFilter *GoogleAnalyticsAdminV1alphaAccessBetweenFilter `json:"betweenFilter"`
	FieldName     *string                                         `json:"fieldName"`
	InListFilter  *GoogleAnalyticsAdminV1alphaAccessInListFilter  `json:"inListFilter"`
	NumericFilter *GoogleAnalyticsAdminV1alphaAccessNumericFilter `json:"numericFilter"`
	StringFilter  *GoogleAnalyticsAdminV1alphaAccessStringFilter  `json:"stringFilter"`
}
