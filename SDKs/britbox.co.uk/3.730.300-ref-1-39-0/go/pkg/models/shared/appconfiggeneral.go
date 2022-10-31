package shared

type AppConfigGeneral struct {
	CurrencyCode    *string                `json:"currencyCode,omitempty"`
	CustomFields    map[string]interface{} `json:"customFields,omitempty"`
	DefaultTimeZone *string                `json:"defaultTimeZone,omitempty"`
	FacebookAppID   *string                `json:"facebookAppId,omitempty"`
	GaToken         *string                `json:"gaToken,omitempty"`
	ItemImageTypes  map[string]string      `json:"itemImageTypes,omitempty"`
	MandatorySignIn *bool                  `json:"mandatorySignIn,omitempty"`
	MaxUserRating   *int32                 `json:"maxUserRating,omitempty"`
	StripeKey       *string                `json:"stripeKey,omitempty"`
	WebsiteURL      *string                `json:"websiteUrl,omitempty"`
}
