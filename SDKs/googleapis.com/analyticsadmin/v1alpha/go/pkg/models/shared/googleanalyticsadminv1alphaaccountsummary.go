package shared

// GoogleAnalyticsAdminV1alphaAccountSummary
// A virtual resource representing an overview of an account and all its child GA4 properties.
type GoogleAnalyticsAdminV1alphaAccountSummary struct {
	Account           *string                                      `json:"account,omitempty"`
	DisplayName       *string                                      `json:"displayName,omitempty"`
	Name              *string                                      `json:"name,omitempty"`
	PropertySummaries []GoogleAnalyticsAdminV1alphaPropertySummary `json:"propertySummaries,omitempty"`
}
