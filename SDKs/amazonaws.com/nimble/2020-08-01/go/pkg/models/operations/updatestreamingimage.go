package operations

import (
"openapi/pkg/models/shared")

type UpdateStreamingImagePathParams struct {
    StreamingImageID string `pathParam:"style=simple,explode=false,name=streamingImageId"`
    StudioID string `pathParam:"style=simple,explode=false,name=studioId"`
    
}

type UpdateStreamingImageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzClientToken *string `header:"style=simple,explode=false,name=X-Amz-Client-Token"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateStreamingImageRequestBody struct {
    Description *string `json:"description,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type UpdateStreamingImageRequest struct {
    PathParams UpdateStreamingImagePathParams 
    Headers UpdateStreamingImageHeaders 
    Request UpdateStreamingImageRequestBody `request:"mediaType=application/json"`
    
}

type UpdateStreamingImageResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServerErrorException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UpdateStreamingImageResponse *shared.UpdateStreamingImageResponse 
    ValidationException *interface{} 
    
}

