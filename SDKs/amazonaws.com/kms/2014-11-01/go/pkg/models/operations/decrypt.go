package operations

import (
"openapi/pkg/models/shared")


type DecryptXAmzTargetEnum string

const (
    DecryptXAmzTargetEnumTrentServiceDecrypt DecryptXAmzTargetEnum = "TrentService.Decrypt"
)


type DecryptHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DecryptXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DecryptRequest struct {
    Headers DecryptHeaders 
    Request shared.DecryptRequest `request:"mediaType=application/json"`
    
}

type DecryptResponse struct {
    ContentType string 
    DecryptResponse *shared.DecryptResponse 
    DependencyTimeoutException *interface{} 
    DisabledException *interface{} 
    IncorrectKeyException *interface{} 
    InvalidCiphertextException *interface{} 
    InvalidGrantTokenException *interface{} 
    InvalidKeyUsageException *interface{} 
    KmsInternalException *interface{} 
    KmsInvalidStateException *interface{} 
    KeyUnavailableException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    
}

