package operations

import (
"openapi/pkg/models/shared")

type RetargetingDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type RetargetingDeleteRequest struct {
    PathParams RetargetingDeletePathParams 
    
}

type RetargetingDeleteResponse struct {
    APICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntityURISystemInt64 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

