package operations

import (
"openapi/pkg/models/shared")

type AddParticipantGroupPathParams struct {
    ConvID string `pathParam:"style=simple,explode=false,name=convId"`
    
}

type AddParticipantGroupRequestBody struct {
    Participants []string `form:"name=participants"`
    
}

type AddParticipantGroupSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type AddParticipantGroupRequest struct {
    PathParams AddParticipantGroupPathParams 
    Request AddParticipantGroupRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security AddParticipantGroupSecurity 
    
}

type AddParticipantGroupResponse struct {
    Body []byte 
    ContentType string 
    Conversation *interface{} 
    StatusCode int64 
    
}

