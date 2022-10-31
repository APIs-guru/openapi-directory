package operations

import (
"openapi/pkg/models/shared")

type DomainsDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DomainsDeleteRequest struct {
    PathParams DomainsDeletePathParams 
    
}

type DomainsDeleteResponse struct {
    APICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntityURISystemInt64 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

