package shared

// GoogleAnalyticsAdminV1alphaAccessBetweenFilter
// To express that the result needs to be between two numbers (inclusive).
type GoogleAnalyticsAdminV1alphaAccessBetweenFilter struct {
	FromValue *GoogleAnalyticsAdminV1alphaNumericValue `json:"fromValue,omitempty"`
	ToValue   *GoogleAnalyticsAdminV1alphaNumericValue `json:"toValue,omitempty"`
}
