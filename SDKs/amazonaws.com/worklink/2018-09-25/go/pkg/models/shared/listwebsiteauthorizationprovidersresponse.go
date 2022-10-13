package shared

type ListWebsiteAuthorizationProvidersResponse struct {
	NextToken                     *string                               `json:"NextToken"`
	WebsiteAuthorizationProviders []WebsiteAuthorizationProviderSummary `json:"WebsiteAuthorizationProviders"`
}
