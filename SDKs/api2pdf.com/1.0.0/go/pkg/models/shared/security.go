package shared

type SchemeHeaderAPIKey struct {
	APIKey string `security:"name=Authorization"`
}

type SchemeQueryAPIKey struct {
	APIKey string `security:"name=apikey"`
}

type Security struct {
	HeaderAPIKey SchemeHeaderAPIKey `security:"scheme,type=apiKey,subtype=header"`
}
