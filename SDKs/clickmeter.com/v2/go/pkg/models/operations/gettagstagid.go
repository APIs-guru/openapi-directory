package operations

import (
"openapi/pkg/models/shared")

type GetTagsTagIDPathParams struct {
    TagID int64 `pathParam:"style=simple,explode=false,name=tagId"`
    
}

type GetTagsTagIDRequest struct {
    PathParams GetTagsTagIDPathParams 
    
}

type GetTagsTagIDResponse struct {
    APICoreDtoTagsTag *shared.APICoreDtoTagsTag 
    ContentType string 
    StatusCode int64 
    
}

