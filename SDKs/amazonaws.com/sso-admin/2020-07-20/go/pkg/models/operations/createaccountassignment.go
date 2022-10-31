package operations

import (
"openapi/pkg/models/shared")


type CreateAccountAssignmentXAmzTargetEnum string

const (
    CreateAccountAssignmentXAmzTargetEnumSwbExternalServiceCreateAccountAssignment CreateAccountAssignmentXAmzTargetEnum = "SWBExternalService.CreateAccountAssignment"
)


type CreateAccountAssignmentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateAccountAssignmentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateAccountAssignmentRequest struct {
    Headers CreateAccountAssignmentHeaders 
    Request shared.CreateAccountAssignmentRequest `request:"mediaType=application/json"`
    
}

type CreateAccountAssignmentResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    CreateAccountAssignmentResponse *shared.CreateAccountAssignmentResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

