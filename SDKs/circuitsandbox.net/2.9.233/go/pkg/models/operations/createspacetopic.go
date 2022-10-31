package operations

import (
"openapi/pkg/models/shared")

type CreateSpaceTopicPathParams struct {
    SpaceID string `pathParam:"style=simple,explode=false,name=spaceId"`
    
}

type CreateSpaceTopicRequestBody struct {
    Attachments []string `form:"name=attachments"`
    Complex *bool `form:"name=complex"`
    Content *string `form:"name=content"`
    ContentTags []string `form:"name=contentTags"`
    FormMetaData *string `form:"name=formMetaData"`
    MentionedUser *string `form:"name=mentionedUser"`
    Subject string `form:"name=subject"`
    Tags []string `form:"name=tags"`
    
}

type CreateSpaceTopicSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type CreateSpaceTopicRequest struct {
    PathParams CreateSpaceTopicPathParams 
    Request CreateSpaceTopicRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateSpaceTopicSecurity 
    
}

type CreateSpaceTopicResponse struct {
    Body []byte 
    ContentType string 
    SpaceTopic *interface{} 
    StatusCode int64 
    
}

