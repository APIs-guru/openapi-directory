package operations

import (
"openapi/pkg/models/shared")


type DisableKeyXAmzTargetEnum string

const (
    DisableKeyXAmzTargetEnumTrentServiceDisableKey DisableKeyXAmzTargetEnum = "TrentService.DisableKey"
)


type DisableKeyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DisableKeyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DisableKeyRequest struct {
    Headers DisableKeyHeaders 
    Request shared.DisableKeyRequest `request:"mediaType=application/json"`
    
}

type DisableKeyResponse struct {
    ContentType string 
    DependencyTimeoutException *interface{} 
    InvalidArnException *interface{} 
    KmsInternalException *interface{} 
    KmsInvalidStateException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    
}

