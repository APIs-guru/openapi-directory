package shared



type SchemeAPIKey struct {
    APIKey string `security:"name=Authorization"`
    
}

type SchemeApplicationID struct {
    APIKey string `security:"name=x-apideck-app-id"`
    
}

type Security struct {
    APIKey SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ApplicationID SchemeApplicationID `security:"scheme,type=apiKey,subtype=header"`
    
}

