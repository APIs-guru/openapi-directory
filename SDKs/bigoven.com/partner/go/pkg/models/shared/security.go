package shared



type SchemeAPIKey struct {
    APIKey string `security:"name=X-BigOven-API-Key"`
    
}

type SchemeBasic struct {
    Authorization string `security:"name=Authorization"`
    
}

