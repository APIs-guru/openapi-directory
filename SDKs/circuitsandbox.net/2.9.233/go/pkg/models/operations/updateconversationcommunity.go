package operations

import (
"openapi/pkg/models/shared")

type UpdateConversationCommunityPathParams struct {
    ConvID string `pathParam:"style=simple,explode=false,name=convId"`
    
}

type UpdateConversationCommunityRequestBody struct {
    Description *string `form:"name=description"`
    Topic *string `form:"name=topic"`
    
}

type UpdateConversationCommunitySecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type UpdateConversationCommunityRequest struct {
    PathParams UpdateConversationCommunityPathParams 
    Request *UpdateConversationCommunityRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateConversationCommunitySecurity 
    
}

type UpdateConversationCommunityResponse struct {
    Body []byte 
    ContentType string 
    Conversation *interface{} 
    StatusCode int64 
    
}

