package operations

import (
"openapi/pkg/models/shared")

type DatabaseUpdateCollectionPathParams struct {
    CollectionID string `pathParam:"style=simple,explode=false,name=collectionId"`
    
}

type DatabaseUpdateCollectionRequestBody struct {
    Name string `json:"name"`
    Read []string `json:"read,omitempty"`
    Rules []string `json:"rules,omitempty"`
    Write []string `json:"write,omitempty"`
    
}

type DatabaseUpdateCollectionSecurity struct {
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type DatabaseUpdateCollectionRequest struct {
    PathParams DatabaseUpdateCollectionPathParams 
    Request *DatabaseUpdateCollectionRequestBody `request:"mediaType=application/json"`
    Security DatabaseUpdateCollectionSecurity 
    
}

type DatabaseUpdateCollectionResponse struct {
    ContentType string 
    StatusCode int64 
    Collection *shared.Collection 
    
}

