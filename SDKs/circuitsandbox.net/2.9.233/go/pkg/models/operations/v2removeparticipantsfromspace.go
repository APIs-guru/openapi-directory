package operations

import (
"openapi/pkg/models/shared")

type V2RemoveParticipantsFromSpacePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type V2RemoveParticipantsFromSpaceRequestBody struct {
    UserIds []string `form:"name=userIds"`
    
}

type V2RemoveParticipantsFromSpaceSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type V2RemoveParticipantsFromSpaceRequest struct {
    PathParams V2RemoveParticipantsFromSpacePathParams 
    Request V2RemoveParticipantsFromSpaceRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security V2RemoveParticipantsFromSpaceSecurity 
    
}

type V2RemoveParticipantsFromSpaceResponse struct {
    ContentType string 
    StatusCode int64 
    
}

