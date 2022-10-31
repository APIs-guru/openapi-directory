package shared



type SchemeAPIKeyHeaderAuth struct {
    APIKey string `security:"name=X-Api-Key"`
    
}

type SchemeAPIKeyQueryAuth struct {
    APIKey string `security:"name=api_key"`
    
}

type SchemeAPIKey struct {
    APIKey string `security:"name=api_key"`
    
}

type Security struct {
    APIKeyHeaderAuth SchemeAPIKeyHeaderAuth `security:"scheme,type=apiKey,subtype=header"`
    APIKeyQueryAuth SchemeAPIKeyQueryAuth `security:"scheme,type=apiKey,subtype=query"`
    APIKey SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
    
}

