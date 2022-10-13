package shared

type GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequest struct {
	Account     *GoogleAnalyticsAdminV1alphaAccount `json:"account"`
	RedirectURI *string                             `json:"redirectUri"`
}
