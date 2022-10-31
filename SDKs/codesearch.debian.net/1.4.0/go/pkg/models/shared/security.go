package shared

type SchemeAPIKey struct {
	APIKey string `security:"name=x-dcs-apikey"`
}
