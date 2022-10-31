package operations

import (
"openapi/pkg/models/shared")


type GenerateDataKeyPairWithoutPlaintextXAmzTargetEnum string

const (
    GenerateDataKeyPairWithoutPlaintextXAmzTargetEnumTrentServiceGenerateDataKeyPairWithoutPlaintext GenerateDataKeyPairWithoutPlaintextXAmzTargetEnum = "TrentService.GenerateDataKeyPairWithoutPlaintext"
)


type GenerateDataKeyPairWithoutPlaintextHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GenerateDataKeyPairWithoutPlaintextXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GenerateDataKeyPairWithoutPlaintextRequest struct {
    Headers GenerateDataKeyPairWithoutPlaintextHeaders 
    Request shared.GenerateDataKeyPairWithoutPlaintextRequest `request:"mediaType=application/json"`
    
}

type GenerateDataKeyPairWithoutPlaintextResponse struct {
    ContentType string 
    DependencyTimeoutException *interface{} 
    DisabledException *interface{} 
    GenerateDataKeyPairWithoutPlaintextResponse *shared.GenerateDataKeyPairWithoutPlaintextResponse 
    InvalidGrantTokenException *interface{} 
    InvalidKeyUsageException *interface{} 
    KmsInternalException *interface{} 
    KmsInvalidStateException *interface{} 
    KeyUnavailableException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnsupportedOperationException *interface{} 
    
}

