package shared



type SchemeAPIKey struct {
    APIKey string `security:"name=X-Clickmeter-AuthKey"`
    
}

type Security struct {
    APIKey SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

