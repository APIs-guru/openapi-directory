package operations

import (
"openapi/pkg/models/shared")


type CreateProtectionXAmzTargetEnum string

const (
    CreateProtectionXAmzTargetEnumAwsShield20160616CreateProtection CreateProtectionXAmzTargetEnum = "AWSShield_20160616.CreateProtection"
)


type CreateProtectionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateProtectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateProtectionRequest struct {
    Headers CreateProtectionHeaders 
    Request shared.CreateProtectionRequest `request:"mediaType=application/json"`
    
}

type CreateProtectionResponse struct {
    ContentType string 
    CreateProtectionResponse *shared.CreateProtectionResponse 
    InternalErrorException *interface{} 
    InvalidOperationException *interface{} 
    InvalidParameterException *interface{} 
    InvalidResourceException *interface{} 
    LimitsExceededException *interface{} 
    OptimisticLockException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

