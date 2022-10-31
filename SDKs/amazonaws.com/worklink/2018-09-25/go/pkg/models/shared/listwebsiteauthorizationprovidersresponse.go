package shared

type ListWebsiteAuthorizationProvidersResponse struct {
	NextToken                     *string                               `json:"NextToken,omitempty"`
	WebsiteAuthorizationProviders []WebsiteAuthorizationProviderSummary `json:"WebsiteAuthorizationProviders,omitempty"`
}
