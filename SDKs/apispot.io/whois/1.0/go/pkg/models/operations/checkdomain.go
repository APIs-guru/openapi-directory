package operations



type CheckDomainPathParams struct {
    Domain string `pathParam:"style=simple,explode=false,name=domain"`
    
}

type CheckDomainRequest struct {
    PathParams CheckDomainPathParams 
    
}

type CheckDomain200ApplicationJSON struct {
    IsAvailable *bool `json:"isAvailable,omitempty"`
    
}

type CheckDomainResponse struct {
    ContentType string 
    StatusCode int64 
    CheckDomain200ApplicationJSONObject *CheckDomain200ApplicationJSON 
    
}

