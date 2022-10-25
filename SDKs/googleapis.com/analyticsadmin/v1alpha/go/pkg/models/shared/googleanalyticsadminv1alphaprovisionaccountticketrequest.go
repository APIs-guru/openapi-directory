package shared

type GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequest struct {
	Account     *GoogleAnalyticsAdminV1alphaAccount `json:"account,omitempty"`
	RedirectURI *string                             `json:"redirectUri,omitempty"`
}
