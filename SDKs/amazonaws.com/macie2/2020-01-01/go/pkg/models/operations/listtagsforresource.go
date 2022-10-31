package operations

import (
"openapi/pkg/models/shared")

type ListTagsForResourcePathParams struct {
    ResourceArn string `pathParam:"style=simple,explode=false,name=resourceArn"`
    
}

type ListTagsForResourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListTagsForResourceRequest struct {
    PathParams ListTagsForResourcePathParams 
    Headers ListTagsForResourceHeaders 
    
}

type ListTagsForResourceResponse struct {
    ContentType string 
    ListTagsForResourceResponse *shared.ListTagsForResourceResponse 
    StatusCode int64 
    
}

