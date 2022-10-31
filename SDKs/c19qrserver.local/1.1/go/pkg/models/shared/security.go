package shared

type SchemeTokenHeader struct {
	APIKey string `security:"name=token"`
}

type Security struct {
	TokenHeader SchemeTokenHeader `security:"scheme,type=apiKey,subtype=header"`
}
