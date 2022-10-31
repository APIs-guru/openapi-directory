package operations

import (
"openapi/pkg/models/shared")

type CreateGroupConversationRequestBody struct {
    Participants []string `form:"name=participants"`
    Topic *string `form:"name=topic"`
    
}

type CreateGroupConversationSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type CreateGroupConversationRequest struct {
    Request CreateGroupConversationRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateGroupConversationSecurity 
    
}

type CreateGroupConversationResponse struct {
    Body []byte 
    ContentType string 
    Conversation *interface{} 
    StatusCode int64 
    
}

