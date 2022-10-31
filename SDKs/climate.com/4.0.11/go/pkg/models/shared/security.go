package shared



type SchemeAPIKey struct {
    APIKey string `security:"name=X-Api-Key"`
    
}

type SchemeOauth2AuthorizationCode struct {
    Authorization string `security:"name=Authorization"`
    
}

