package shared

type SchemeAPIKey struct {
	APIKey string `security:"name=Authorization"`
}

type Security struct {
	APIKey SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}
