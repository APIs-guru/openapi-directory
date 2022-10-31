package operations

import (
"openapi/pkg/models/shared")


type ReEncryptXAmzTargetEnum string

const (
    ReEncryptXAmzTargetEnumTrentServiceReEncrypt ReEncryptXAmzTargetEnum = "TrentService.ReEncrypt"
)


type ReEncryptHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ReEncryptXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ReEncryptRequest struct {
    Headers ReEncryptHeaders 
    Request shared.ReEncryptRequest `request:"mediaType=application/json"`
    
}

type ReEncryptResponse struct {
    ContentType string 
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
    ReEncryptResponse *shared.ReEncryptResponse 
    StatusCode int64 
    
}

