package shared

type SchemeAPIKey struct {
	APIKey string `security:"name=Api-Key"`
}

type SchemeOAuth2 struct {
	Authorization string `security:"name=Authorization"`
}

type SecurityOption1 struct {
	APIKey SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type SecurityOption2 struct {
	OAuth2 SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type Security struct {
	Option1 *SecurityOption1 `security:"option"`
	Option2 *SecurityOption2 `security:"option"`
}
