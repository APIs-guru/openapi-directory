package operations

import (
"openapi/pkg/models/shared")

type DatabaseGetCollectionPathParams struct {
    CollectionID string `pathParam:"style=simple,explode=false,name=collectionId"`
    
}

type DatabaseGetCollectionSecurity struct {
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type DatabaseGetCollectionRequest struct {
    PathParams DatabaseGetCollectionPathParams 
    Security DatabaseGetCollectionSecurity 
    
}

type DatabaseGetCollectionResponse struct {
    ContentType string 
    StatusCode int64 
    Collection *shared.Collection 
    
}

