package shared

type SchemeClientID struct {
	APIKey string `security:"name=X-APISETU-CLIENTID"`
}

type SchemeAPIKey struct {
	APIKey string `security:"name=X-APISETU-APIKEY"`
}
