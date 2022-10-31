package operations

import (
"openapi/pkg/models/shared")

type GetLaunchProfilePathParams struct {
    LaunchProfileID string `pathParam:"style=simple,explode=false,name=launchProfileId"`
    StudioID string `pathParam:"style=simple,explode=false,name=studioId"`
    
}

type GetLaunchProfileHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetLaunchProfileRequest struct {
    PathParams GetLaunchProfilePathParams 
    Headers GetLaunchProfileHeaders 
    
}

type GetLaunchProfileResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    GetLaunchProfileResponse *shared.GetLaunchProfileResponse 
    InternalServerErrorException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

