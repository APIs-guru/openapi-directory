package operations

import (
"openapi/pkg/models/shared")

type UpdateSpaceReplyPathParams struct {
    ReplyID string `pathParam:"style=simple,explode=false,name=replyId"`
    SpaceID string `pathParam:"style=simple,explode=false,name=spaceId"`
    TopicID string `pathParam:"style=simple,explode=false,name=topicId"`
    
}

type UpdateSpaceReplyRequestBody struct {
    Attachments []string `form:"name=attachments"`
    Complex *bool `form:"name=complex"`
    Content *string `form:"name=content"`
    FormMetaData *string `form:"name=formMetaData"`
    MentionedUsers []string `form:"name=mentionedUsers"`
    
}

type UpdateSpaceReplySecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type UpdateSpaceReplyRequest struct {
    PathParams UpdateSpaceReplyPathParams 
    Request *UpdateSpaceReplyRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateSpaceReplySecurity 
    
}

type UpdateSpaceReplyResponse struct {
    Body []byte 
    ContentType string 
    SpaceReply *interface{} 
    StatusCode int64 
    
}

