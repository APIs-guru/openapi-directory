package shared

type SchemePersonalAccessToken struct {
	Authorization string `security:"name=Authorization"`
}

type SchemeOauth2 struct {
	Authorization string `security:"name=Authorization"`
}

type Security struct {
	PersonalAccessToken *SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth2              *SchemeOauth2              `security:"scheme,type=oauth2"`
}
