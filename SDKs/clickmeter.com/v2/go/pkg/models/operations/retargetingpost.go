package operations

import (
"openapi/pkg/models/shared")

type RetargetingPostPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type RetargetingPostRequests struct {
    APICoreDtoRetargetingRetargetingScript *shared.APICoreDtoRetargetingRetargetingScript `request:"mediaType=application/json"`
    APICoreDtoRetargetingRetargetingScript1 *shared.APICoreDtoRetargetingRetargetingScript `request:"mediaType=application/x-www-form-urlencoded"`
    APICoreDtoRetargetingRetargetingScript2 *shared.APICoreDtoRetargetingRetargetingScript `request:"mediaType=text/json"`
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type RetargetingPostRequest struct {
    PathParams RetargetingPostPathParams 
    Request RetargetingPostRequests 
    
}

type RetargetingPostResponse struct {
    APICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntityURISystemInt64 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

