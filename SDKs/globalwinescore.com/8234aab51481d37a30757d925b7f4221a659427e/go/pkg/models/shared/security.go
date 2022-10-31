package shared



type SchemeTokenAuthentication struct {
    APIKey string `security:"name=Authorization"`
    
}

type Security struct {
    TokenAuthentication SchemeTokenAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

