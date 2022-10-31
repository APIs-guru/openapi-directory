package operations

import (
"openapi/pkg/models/shared")

type GroupsPatchNotesPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GroupsPatchNotesRequests struct {
    APICoreRequestsGenericTextPatch *shared.APICoreRequestsGenericTextPatch `request:"mediaType=application/json"`
    APICoreRequestsGenericTextPatch1 *shared.APICoreRequestsGenericTextPatch `request:"mediaType=application/x-www-form-urlencoded"`
    APICoreRequestsGenericTextPatch2 *shared.APICoreRequestsGenericTextPatch `request:"mediaType=text/json"`
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type GroupsPatchNotesRequest struct {
    PathParams GroupsPatchNotesPathParams 
    Request GroupsPatchNotesRequests 
    
}

type GroupsPatchNotesResponse struct {
    APICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntityURISystemInt64 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

