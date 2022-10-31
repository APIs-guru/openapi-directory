package shared



type SchemeApikey struct {
    APIKey string `security:"name=circle-token"`
    
}

type Security struct {
    Apikey SchemeApikey `security:"scheme,type=apiKey,subtype=query"`
    
}

