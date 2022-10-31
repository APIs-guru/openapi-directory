package operations

import (
"openapi/pkg/models/shared")


type AssociateDrtRoleXAmzTargetEnum string

const (
    AssociateDrtRoleXAmzTargetEnumAwsShield20160616AssociateDrtRole AssociateDrtRoleXAmzTargetEnum = "AWSShield_20160616.AssociateDRTRole"
)


type AssociateDrtRoleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AssociateDrtRoleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AssociateDrtRoleRequest struct {
    Headers AssociateDrtRoleHeaders 
    Request shared.AssociateDrtRoleRequest `request:"mediaType=application/json"`
    
}

type AssociateDrtRoleResponse struct {
    AccessDeniedForDependencyException *interface{} 
    AssociateDrtRoleResponse map[string]interface{} 
    ContentType string 
    InternalErrorException *interface{} 
    InvalidOperationException *interface{} 
    InvalidParameterException *interface{} 
    OptimisticLockException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

