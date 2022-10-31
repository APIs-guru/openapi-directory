package operations

import (
"openapi/pkg/models/shared")

type GetStudioMemberPathParams struct {
    PrincipalID string `pathParam:"style=simple,explode=false,name=principalId"`
    StudioID string `pathParam:"style=simple,explode=false,name=studioId"`
    
}

type GetStudioMemberHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetStudioMemberRequest struct {
    PathParams GetStudioMemberPathParams 
    Headers GetStudioMemberHeaders 
    
}

type GetStudioMemberResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    GetStudioMemberResponse *shared.GetStudioMemberResponse 
    InternalServerErrorException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

