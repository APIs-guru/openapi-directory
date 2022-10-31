package operations

import (
"openapi/pkg/models/shared")

type UnpinTopicPathParams struct {
    TopicID string `pathParam:"style=simple,explode=false,name=topicId"`
    
}

type UnpinTopicSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type UnpinTopicRequest struct {
    PathParams UnpinTopicPathParams 
    Security UnpinTopicSecurity 
    
}

type UnpinTopicResponse struct {
    ContentType string 
    StatusCode int64 
    
}

