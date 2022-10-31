package operations

import (
"openapi/pkg/models/shared")

type JoinSpacePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type JoinSpaceSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type JoinSpaceRequest struct {
    PathParams JoinSpacePathParams 
    Security JoinSpaceSecurity 
    
}

type JoinSpaceResponse struct {
    Body []byte 
    ContentType string 
    ParticipantSpaceWrapper *interface{} 
    StatusCode int64 
    
}

