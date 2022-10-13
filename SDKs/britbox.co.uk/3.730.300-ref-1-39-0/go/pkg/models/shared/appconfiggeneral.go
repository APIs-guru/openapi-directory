package shared

type AppConfigGeneral struct {
	CurrencyCode    *string                `json:"currencyCode"`
	CustomFields    map[string]interface{} `json:"customFields"`
	DefaultTimeZone *string                `json:"defaultTimeZone"`
	FacebookAppID   *string                `json:"facebookAppId"`
	GaToken         *string                `json:"gaToken"`
	ItemImageTypes  map[string]string      `json:"itemImageTypes"`
	MandatorySignIn *bool                  `json:"mandatorySignIn"`
	MaxUserRating   *int32                 `json:"maxUserRating"`
	StripeKey       *string                `json:"stripeKey"`
	WebsiteURL      *string                `json:"websiteUrl"`
}
