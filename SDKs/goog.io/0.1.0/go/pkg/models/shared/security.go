package shared

type SchemeApikey struct {
	APIKey string `security:"name=apikey"`
}

type Security struct {
	Apikey SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}
