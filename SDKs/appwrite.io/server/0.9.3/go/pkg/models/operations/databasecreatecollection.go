package operations

import (
"openapi/pkg/models/shared")

type DatabaseCreateCollectionRequestBody struct {
    Name string `json:"name"`
    Read []string `json:"read"`
    Rules []string `json:"rules"`
    Write []string `json:"write"`
    
}

type DatabaseCreateCollectionSecurity struct {
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type DatabaseCreateCollectionRequest struct {
    Request *DatabaseCreateCollectionRequestBody `request:"mediaType=application/json"`
    Security DatabaseCreateCollectionSecurity 
    
}

type DatabaseCreateCollectionResponse struct {
    ContentType string 
    StatusCode int64 
    Collection *shared.Collection 
    
}

