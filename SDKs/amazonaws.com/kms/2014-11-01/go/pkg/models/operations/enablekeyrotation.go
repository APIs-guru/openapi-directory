package operations

import (
"openapi/pkg/models/shared")


type EnableKeyRotationXAmzTargetEnum string

const (
    EnableKeyRotationXAmzTargetEnumTrentServiceEnableKeyRotation EnableKeyRotationXAmzTargetEnum = "TrentService.EnableKeyRotation"
)


type EnableKeyRotationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget EnableKeyRotationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type EnableKeyRotationRequest struct {
    Headers EnableKeyRotationHeaders 
    Request shared.EnableKeyRotationRequest `request:"mediaType=application/json"`
    
}

type EnableKeyRotationResponse struct {
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

