package shared

type SchemeXapiKey struct {
	APIKey string `security:"name=api_key"`
}

type Security struct {
	XAPIKey SchemeXapiKey `security:"scheme,type=apiKey,subtype=header"`
}
