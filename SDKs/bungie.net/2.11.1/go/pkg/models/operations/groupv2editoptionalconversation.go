package operations

import (
"openapi/pkg/models/shared")

type GroupV2EditOptionalConversationPathParams struct {
    ConversationID int64 `pathParam:"style=simple,explode=false,name=conversationId"`
    GroupID int64 `pathParam:"style=simple,explode=false,name=groupId"`
    
}

type GroupV2EditOptionalConversationSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GroupV2EditOptionalConversationRequest struct {
    PathParams GroupV2EditOptionalConversationPathParams 
    Security GroupV2EditOptionalConversationSecurity 
    
}

type GroupV2EditOptionalConversationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

