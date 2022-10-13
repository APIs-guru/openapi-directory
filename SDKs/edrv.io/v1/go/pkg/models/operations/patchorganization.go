package operations

type PatchOrganizationPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatchOrganizationRequestBodyAddress struct {
	City            *string `json:"city"`
	Country         *string `json:"country"`
	PostalCode      *string `json:"postalCode"`
	StreetAndNumber *string `json:"streetAndNumber"`
}

type PatchOrganizationRequestBodyChannels struct {
	Slack    map[string]interface{} `json:"slack"`
	Telegram map[string]interface{} `json:"telegram"`
}

type PatchOrganizationRequestBodyConfigurations struct {
	BasicAuthEnabled  *bool `json:"basicAuthEnabled"`
	BasicAuthPassword *bool `json:"basicAuthPassword"`
}

type PatchOrganizationRequestBodyLinks struct {
	About   *string `json:"about"`
	Contact *string `json:"contact"`
	Privacy *string `json:"privacy"`
	Support *string `json:"support"`
}

type PatchOrganizationRequestBodySupportChat struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type PatchOrganizationRequestBodySupport struct {
	BusinessHours *string                                  `json:"business_hours"`
	Chat          *PatchOrganizationRequestBodySupportChat `json:"chat"`
	ContactNumber *string                                  `json:"contact_number"`
	Email         *string                                  `json:"email"`
}

type PatchOrganizationRequestBodySupportChat1 struct {
	ID   *string `json:"id"`
	Name *string `json:"name"`
}

type PatchOrganizationRequestBodyThemeColors struct {
	Primary   *string `json:"primary"`
	Secondary *string `json:"secondary"`
}

type PatchOrganizationRequestBodyTheme struct {
	Colors *PatchOrganizationRequestBodyThemeColors `json:"colors"`
}

type PatchOrganizationRequestBody struct {
	Active                   *bool                                       `json:"active"`
	Address                  *PatchOrganizationRequestBodyAddress        `json:"address"`
	Channels                 *PatchOrganizationRequestBodyChannels       `json:"channels"`
	Configurations           *PatchOrganizationRequestBodyConfigurations `json:"configurations"`
	Links                    *PatchOrganizationRequestBodyLinks          `json:"links"`
	Locations                []interface{}                               `json:"locations"`
	Logo                     *string                                     `json:"logo"`
	Name                     *string                                     `json:"name"`
	Otp                      *string                                     `json:"otp"`
	StripeConnectedAccountID *string                                     `json:"stripe_connected_account_id"`
	StripeCountry            *string                                     `json:"stripe_country"`
	StripeCurrency           *string                                     `json:"stripe_currency"`
	StripeReserveAmount      *int64                                      `json:"stripe_reserve_amount"`
	Support                  *PatchOrganizationRequestBodySupport        `json:"support"`
	SupportChat              *PatchOrganizationRequestBodySupportChat1   `json:"supportChat"`
	Theme                    *PatchOrganizationRequestBodyTheme          `json:"theme"`
}

type PatchOrganizationRequest struct {
	PathParams PatchOrganizationPathParams
	Request    PatchOrganizationRequestBody `request:"mediaType=application/json"`
}

type PatchOrganizationResponse struct {
	ContentType string
	StatusCode  int64
}
