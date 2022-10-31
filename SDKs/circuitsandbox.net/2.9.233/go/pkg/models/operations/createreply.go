package operations

import (
"openapi/pkg/models/shared")

type CreateReplyPathParams struct {
    SpaceID string `pathParam:"style=simple,explode=false,name=spaceId"`
    TopicID string `pathParam:"style=simple,explode=false,name=topicId"`
    
}

type CreateReplyRequestBody struct {
    Attachments []string `form:"name=attachments"`
    Complex *bool `form:"name=complex"`
    Content *string `form:"name=content"`
    FormMetaData *string `form:"name=formMetaData"`
    MentionedUser *string `form:"name=mentionedUser"`
    
}

type CreateReplySecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type CreateReplyRequest struct {
    PathParams CreateReplyPathParams 
    Request *CreateReplyRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateReplySecurity 
    
}

type CreateReplyResponse struct {
    Body []byte 
    ContentType string 
    SpaceReply *interface{} 
    StatusCode int64 
    
}

