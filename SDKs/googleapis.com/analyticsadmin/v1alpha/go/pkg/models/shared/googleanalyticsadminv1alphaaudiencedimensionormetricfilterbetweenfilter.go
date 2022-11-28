package shared

// GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter
// A filter for numeric or date values between certain values on a dimension or metric.
type GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter struct {
	FromValue *GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue `json:"fromValue,omitempty"`
	ToValue   *GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue `json:"toValue,omitempty"`
}
