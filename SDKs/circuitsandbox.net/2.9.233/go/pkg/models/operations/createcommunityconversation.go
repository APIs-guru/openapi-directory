package operations

import (
"openapi/pkg/models/shared")

type CreateCommunityConversationRequestBody struct {
    Description *string `form:"name=description"`
    Participants []string `form:"name=participants"`
    Topic string `form:"name=topic"`
    
}

type CreateCommunityConversationSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type CreateCommunityConversationRequest struct {
    Request *CreateCommunityConversationRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateCommunityConversationSecurity 
    
}

type CreateCommunityConversationResponse struct {
    Body []byte 
    ContentType string 
    Conversation *interface{} 
    StatusCode int64 
    
}

