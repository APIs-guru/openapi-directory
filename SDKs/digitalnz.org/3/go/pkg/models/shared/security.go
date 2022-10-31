package shared



type SchemeAPIKeyAuth struct {
    APIKey string `security:"name=api_key"`
    
}

type Security struct {
    APIKeyAuth SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=query"`
    
}

