package shared

type SchemeAPIKey struct {
	APIKey string `security:"name=Api-Key"`
}

type SchemeOAuth2 struct {
	Authorization string `security:"name=Authorization"`
}

type Security struct {
	APIKey *SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
	OAuth2 *SchemeOAuth2 `security:"scheme,type=oauth2"`
}
