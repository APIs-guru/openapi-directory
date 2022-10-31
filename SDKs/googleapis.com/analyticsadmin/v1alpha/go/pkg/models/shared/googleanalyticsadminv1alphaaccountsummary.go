package shared



type GoogleAnalyticsAdminV1alphaAccountSummary struct {
    Account *string `json:"account,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Name *string `json:"name,omitempty"`
    PropertySummaries []GoogleAnalyticsAdminV1alphaPropertySummary `json:"propertySummaries,omitempty"`
    
}

