package operations

import (
"openapi/pkg/models/shared")


type CreateProtectionGroupXAmzTargetEnum string

const (
    CreateProtectionGroupXAmzTargetEnumAwsShield20160616CreateProtectionGroup CreateProtectionGroupXAmzTargetEnum = "AWSShield_20160616.CreateProtectionGroup"
)


type CreateProtectionGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateProtectionGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateProtectionGroupRequest struct {
    Headers CreateProtectionGroupHeaders 
    Request shared.CreateProtectionGroupRequest `request:"mediaType=application/json"`
    
}

type CreateProtectionGroupResponse struct {
    ContentType string 
    CreateProtectionGroupResponse map[string]interface{} 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    LimitsExceededException *interface{} 
    OptimisticLockException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

