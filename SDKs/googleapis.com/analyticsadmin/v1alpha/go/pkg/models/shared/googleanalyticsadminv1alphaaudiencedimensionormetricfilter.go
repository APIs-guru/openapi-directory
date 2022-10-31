package shared

type GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter struct {
	AtAnyPointInTime *bool                                                                    `json:"atAnyPointInTime,omitempty"`
	BetweenFilter    *GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter `json:"betweenFilter,omitempty"`
	FieldName        *string                                                                  `json:"fieldName,omitempty"`
	InAnyNDayPeriod  *int32                                                                   `json:"inAnyNDayPeriod,omitempty"`
	InListFilter     *GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter  `json:"inListFilter,omitempty"`
	NumericFilter    *GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter `json:"numericFilter,omitempty"`
	StringFilter     *GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter  `json:"stringFilter,omitempty"`
}
