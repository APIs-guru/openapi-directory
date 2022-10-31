package shared



type SchemeAPIKeyAuth struct {
    APIKey string `security:"name=Authorization"`
    
}

type Security struct {
    APIKeyAuth SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

