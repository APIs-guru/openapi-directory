package operations

import (
"openapi/pkg/models/shared")

type ListTagsForResourceQueryParams struct {
    ResourceArn string `queryParam:"style=form,explode=true,name=ResourceArn"`
    
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
    QueryParams ListTagsForResourceQueryParams 
    Headers ListTagsForResourceHeaders 
    
}

type ListTagsForResourceResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    ListTagsForResourceResponse *shared.ListTagsForResourceResponse 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

