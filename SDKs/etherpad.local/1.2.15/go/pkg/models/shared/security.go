package shared

type SchemeAPIKey struct {
	APIKey string `security:"name=apikey"`
}

type Security struct {
	APIKey SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
}
