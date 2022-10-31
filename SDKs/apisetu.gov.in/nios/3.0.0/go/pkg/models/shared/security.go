package shared



type SchemeAPIKey struct {
    APIKey string `security:"name=X-APISETU-APIKEY"`
    
}

type SchemeClientID struct {
    APIKey string `security:"name=X-APISETU-CLIENTID"`
    
}

