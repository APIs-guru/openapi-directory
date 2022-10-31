package operations

import (
"openapi/pkg/models/shared")


type GenerateDataKeyXAmzTargetEnum string

const (
    GenerateDataKeyXAmzTargetEnumTrentServiceGenerateDataKey GenerateDataKeyXAmzTargetEnum = "TrentService.GenerateDataKey"
)


type GenerateDataKeyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GenerateDataKeyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GenerateDataKeyRequest struct {
    Headers GenerateDataKeyHeaders 
    Request shared.GenerateDataKeyRequest `request:"mediaType=application/json"`
    
}

type GenerateDataKeyResponse struct {
    ContentType string 
    DependencyTimeoutException *interface{} 
    DisabledException *interface{} 
    GenerateDataKeyResponse *shared.GenerateDataKeyResponse 
    InvalidGrantTokenException *interface{} 
    InvalidKeyUsageException *interface{} 
    KmsInternalException *interface{} 
    KmsInvalidStateException *interface{} 
    KeyUnavailableException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    
}

