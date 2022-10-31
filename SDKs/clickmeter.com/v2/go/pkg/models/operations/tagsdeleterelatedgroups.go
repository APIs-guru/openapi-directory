package operations

import (
"openapi/pkg/models/shared")

type TagsDeleteRelatedGroupsPathParams struct {
    TagID int64 `pathParam:"style=simple,explode=false,name=tagId"`
    
}

type TagsDeleteRelatedGroupsRequest struct {
    PathParams TagsDeleteRelatedGroupsPathParams 
    
}

type TagsDeleteRelatedGroupsResponse struct {
    APICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntityURISystemInt64 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

