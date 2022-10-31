package shared

type SchemeOauth struct {
	Authorization string `security:"name=Authorization"`
}

type Security struct {
	Oauth SchemeOauth `security:"scheme,type=oauth2"`
}
