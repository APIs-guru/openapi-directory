package shared

type SchemeHeaderAPIKey struct {
	APIKey string `security:"name=Authorization"`
}

type Security struct {
	HeaderAPIKey SchemeHeaderAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type SchemeQueryAPIKey struct {
	APIKey string `security:"name=apikey"`
}
