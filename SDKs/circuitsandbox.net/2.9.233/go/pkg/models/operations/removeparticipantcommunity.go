package operations

import (
"openapi/pkg/models/shared")

type RemoveParticipantCommunityPathParams struct {
    ConvID string `pathParam:"style=simple,explode=false,name=convId"`
    
}

type RemoveParticipantCommunityQueryParams struct {
    Participants []string `queryParam:"style=form,explode=true,name=participants"`
    
}

type RemoveParticipantCommunitySecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type RemoveParticipantCommunityRequest struct {
    PathParams RemoveParticipantCommunityPathParams 
    QueryParams RemoveParticipantCommunityQueryParams 
    Security RemoveParticipantCommunitySecurity 
    
}

type RemoveParticipantCommunityResponse struct {
    Body []byte 
    ContentType string 
    Conversation *interface{} 
    StatusCode int64 
    
}

