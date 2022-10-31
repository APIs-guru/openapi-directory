package operations

import (
"openapi/pkg/models/shared")

type UpdateSpaceTopicPathParams struct {
    SpaceID string `pathParam:"style=simple,explode=false,name=spaceId"`
    TopicID string `pathParam:"style=simple,explode=false,name=topicId"`
    
}

type UpdateSpaceTopicRequestBody struct {
    Attachments []string `form:"name=attachments"`
    Complex *bool `form:"name=complex"`
    Content *string `form:"name=content"`
    ContentTags []string `form:"name=contentTags"`
    FormMetaData *string `form:"name=formMetaData"`
    MentionedUsers []string `form:"name=mentionedUsers"`
    Subject *string `form:"name=subject"`
    Tags []string `form:"name=tags"`
    
}

type UpdateSpaceTopicSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type UpdateSpaceTopicRequest struct {
    PathParams UpdateSpaceTopicPathParams 
    Request *UpdateSpaceTopicRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateSpaceTopicSecurity 
    
}

type UpdateSpaceTopicResponse struct {
    Body []byte 
    ContentType string 
    SpaceTopic *interface{} 
    StatusCode int64 
    
}

