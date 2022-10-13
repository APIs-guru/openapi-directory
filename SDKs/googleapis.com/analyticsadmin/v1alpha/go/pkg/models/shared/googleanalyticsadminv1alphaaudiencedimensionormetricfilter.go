package shared

type GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter struct {
	AtAnyPointInTime *bool                                                                    `json:"atAnyPointInTime"`
	BetweenFilter    *GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter `json:"betweenFilter"`
	FieldName        *string                                                                  `json:"fieldName"`
	InAnyNDayPeriod  *int32                                                                   `json:"inAnyNDayPeriod"`
	InListFilter     *GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter  `json:"inListFilter"`
	NumericFilter    *GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter `json:"numericFilter"`
	StringFilter     *GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter  `json:"stringFilter"`
}
