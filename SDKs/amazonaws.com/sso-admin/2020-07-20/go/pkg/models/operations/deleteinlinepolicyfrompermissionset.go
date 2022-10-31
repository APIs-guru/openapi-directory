package operations

import (
"openapi/pkg/models/shared")


type DeleteInlinePolicyFromPermissionSetXAmzTargetEnum string

const (
    DeleteInlinePolicyFromPermissionSetXAmzTargetEnumSwbExternalServiceDeleteInlinePolicyFromPermissionSet DeleteInlinePolicyFromPermissionSetXAmzTargetEnum = "SWBExternalService.DeleteInlinePolicyFromPermissionSet"
)


type DeleteInlinePolicyFromPermissionSetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteInlinePolicyFromPermissionSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteInlinePolicyFromPermissionSetRequest struct {
    Headers DeleteInlinePolicyFromPermissionSetHeaders 
    Request shared.DeleteInlinePolicyFromPermissionSetRequest `request:"mediaType=application/json"`
    
}

type DeleteInlinePolicyFromPermissionSetResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    DeleteInlinePolicyFromPermissionSetResponse map[string]interface{} 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

