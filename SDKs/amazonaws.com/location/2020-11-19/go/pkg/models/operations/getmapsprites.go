package operations

import (
"openapi/pkg/models/shared")

type GetMapSpritesPathParams struct {
    FileName string `pathParam:"style=simple,explode=false,name=FileName"`
    MapName string `pathParam:"style=simple,explode=false,name=MapName"`
    
}

type GetMapSpritesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetMapSpritesRequest struct {
    PathParams GetMapSpritesPathParams 
    Headers GetMapSpritesHeaders 
    
}

type GetMapSpritesResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetMapSpritesResponse *shared.GetMapSpritesResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

