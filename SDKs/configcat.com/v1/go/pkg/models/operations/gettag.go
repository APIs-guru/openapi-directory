package operations

import (
"openapi/pkg/models/shared")

type GetTagPathParams struct {
    TagID int64 `pathParam:"style=simple,explode=false,name=tagId"`
    
}

type GetTagRequest struct {
    PathParams GetTagPathParams 
    
}

type GetTagResponse struct {
    ContentType string 
    StatusCode int64 
    TagModel *shared.TagModel 
    TagModelHaljson *shared.TagModelHaljson 
    
}

