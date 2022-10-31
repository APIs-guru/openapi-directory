package operations

import (
"openapi/pkg/models/shared")


type DisableKeyRotationXAmzTargetEnum string

const (
    DisableKeyRotationXAmzTargetEnumTrentServiceDisableKeyRotation DisableKeyRotationXAmzTargetEnum = "TrentService.DisableKeyRotation"
)


type DisableKeyRotationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DisableKeyRotationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DisableKeyRotationRequest struct {
    Headers DisableKeyRotationHeaders 
    Request shared.DisableKeyRotationRequest `request:"mediaType=application/json"`
    
}

type DisableKeyRotationResponse struct {
    ContentType string 
    DependencyTimeoutException *interface{} 
    DisabledException *interface{} 
    InvalidArnException *interface{} 
    KmsInternalException *interface{} 
    KmsInvalidStateException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnsupportedOperationException *interface{} 
    
}

