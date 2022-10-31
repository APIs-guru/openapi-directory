package operations

import (
"openapi/pkg/models/shared")

type CreateTagPathParams struct {
    ProductID string `pathParam:"style=simple,explode=false,name=productId"`
    
}

type CreateTagRequests struct {
    CreateTagModel *shared.CreateTagModel `request:"mediaType=application/*+json"`
    CreateTagModel1 *shared.CreateTagModel `request:"mediaType=application/json"`
    CreateTagModel2 *shared.CreateTagModel `request:"mediaType=text/json"`
    
}

type CreateTagRequest struct {
    PathParams CreateTagPathParams 
    Request CreateTagRequests 
    
}

type CreateTagResponse struct {
    ContentType string 
    StatusCode int64 
    TagModel *shared.TagModel 
    TagModelHaljson *shared.TagModelHaljson 
    
}

