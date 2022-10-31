package operations

import (
"openapi/pkg/models/shared")

type V2GetTopicWithRepliesPathParams struct {
    SpaceID string `pathParam:"style=simple,explode=false,name=spaceId"`
    TopicID string `pathParam:"style=simple,explode=false,name=topicId"`
    
}

type V2GetTopicWithRepliesQueryParams struct {
    NumberOfReplies *float64 `queryParam:"style=form,explode=true,name=numberOfReplies"`
    
}

type V2GetTopicWithRepliesSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type V2GetTopicWithRepliesRequest struct {
    PathParams V2GetTopicWithRepliesPathParams 
    QueryParams V2GetTopicWithRepliesQueryParams 
    Security V2GetTopicWithRepliesSecurity 
    
}

type V2GetTopicWithRepliesResponse struct {
    Body []byte 
    ContentType string 
    SpaceTopicWithReplies *interface{} 
    StatusCode int64 
    
}

