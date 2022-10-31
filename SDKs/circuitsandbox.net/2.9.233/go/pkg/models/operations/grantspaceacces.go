package operations

import (
"openapi/pkg/models/shared")

type GrantSpaceAccesPathParams struct {
    ParticipantID string `pathParam:"style=simple,explode=false,name=participantId"`
    SpaceID string `pathParam:"style=simple,explode=false,name=spaceId"`
    
}

type GrantSpaceAccesSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GrantSpaceAccesRequest struct {
    PathParams GrantSpaceAccesPathParams 
    Security GrantSpaceAccesSecurity 
    
}

type GrantSpaceAccesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

