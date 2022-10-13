package shared

type SchemeAPIKeyAuth struct {
	APIKey string `security:"name=x-functions-key"`
}

type SchemeOAuth2 struct {
	Authorization string `security:"name=Authorization"`
}
