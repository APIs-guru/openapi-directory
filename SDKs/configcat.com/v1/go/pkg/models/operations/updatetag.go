package operations

import (
"openapi/pkg/models/shared")

type UpdateTagPathParams struct {
    TagID int64 `pathParam:"style=simple,explode=false,name=tagId"`
    
}

type UpdateTagRequests struct {
    UpdateTagModel *shared.UpdateTagModel `request:"mediaType=application/*+json"`
    UpdateTagModel1 *shared.UpdateTagModel `request:"mediaType=application/json"`
    UpdateTagModel2 *shared.UpdateTagModel `request:"mediaType=text/json"`
    
}

type UpdateTagRequest struct {
    PathParams UpdateTagPathParams 
    Request UpdateTagRequests 
    
}

type UpdateTagResponse struct {
    ContentType string 
    StatusCode int64 
    TagModel *shared.TagModel 
    TagModelHaljson *shared.TagModelHaljson 
    
}

