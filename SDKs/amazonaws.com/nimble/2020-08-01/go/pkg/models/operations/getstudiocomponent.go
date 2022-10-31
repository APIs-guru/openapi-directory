package operations

import (
"openapi/pkg/models/shared")

type GetStudioComponentPathParams struct {
    StudioComponentID string `pathParam:"style=simple,explode=false,name=studioComponentId"`
    StudioID string `pathParam:"style=simple,explode=false,name=studioId"`
    
}

type GetStudioComponentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetStudioComponentRequest struct {
    PathParams GetStudioComponentPathParams 
    Headers GetStudioComponentHeaders 
    
}

type GetStudioComponentResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    GetStudioComponentResponse *shared.GetStudioComponentResponse 
    InternalServerErrorException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

