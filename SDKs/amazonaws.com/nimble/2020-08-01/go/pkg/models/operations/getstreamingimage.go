package operations

import (
"openapi/pkg/models/shared")

type GetStreamingImagePathParams struct {
    StreamingImageID string `pathParam:"style=simple,explode=false,name=streamingImageId"`
    StudioID string `pathParam:"style=simple,explode=false,name=studioId"`
    
}

type GetStreamingImageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetStreamingImageRequest struct {
    PathParams GetStreamingImagePathParams 
    Headers GetStreamingImageHeaders 
    
}

type GetStreamingImageResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    GetStreamingImageResponse *shared.GetStreamingImageResponse 
    InternalServerErrorException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

