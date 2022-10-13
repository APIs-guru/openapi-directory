package shared

type GoogleAnalyticsAdminV1alphaAccountSummary struct {
	Account           *string                                      `json:"account"`
	DisplayName       *string                                      `json:"displayName"`
	Name              *string                                      `json:"name"`
	PropertySummaries []GoogleAnalyticsAdminV1alphaPropertySummary `json:"propertySummaries"`
}
