package operations

import (
"openapi/pkg/models/shared")

type DenySpaceAccesPathParams struct {
    ParticipantID string `pathParam:"style=simple,explode=false,name=participantId"`
    SpaceID string `pathParam:"style=simple,explode=false,name=spaceId"`
    
}

type DenySpaceAccesRequestBody struct {
    Reason *string `form:"name=reason"`
    
}

type DenySpaceAccesSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type DenySpaceAccesRequest struct {
    PathParams DenySpaceAccesPathParams 
    Request *DenySpaceAccesRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security DenySpaceAccesSecurity 
    
}

type DenySpaceAccesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

