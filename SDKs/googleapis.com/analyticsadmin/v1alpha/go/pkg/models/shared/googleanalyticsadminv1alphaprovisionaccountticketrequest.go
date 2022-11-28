package shared

// GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequestInput
// Request message for ProvisionAccountTicket RPC.
type GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequestInput struct {
	Account     *GoogleAnalyticsAdminV1alphaAccountInput `json:"account,omitempty"`
	RedirectURI *string                                  `json:"redirectUri,omitempty"`
}
