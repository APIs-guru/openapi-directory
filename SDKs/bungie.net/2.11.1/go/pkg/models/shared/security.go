package shared



type SchemeAPIKey struct {
    APIKey string `security:"name=X-API-Key"`
    
}

type SchemeOauth2 struct {
    Authorization string `security:"name=Authorization"`
    
}

