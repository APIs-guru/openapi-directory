package shared

type SchemeAPIKey struct {
	APIKey string `security:"name=api_key"`
}

type Security struct {
	APIKey SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
}

type SchemeBasic struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}
