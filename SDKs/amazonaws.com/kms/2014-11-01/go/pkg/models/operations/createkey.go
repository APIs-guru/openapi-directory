package operations

import (
"openapi/pkg/models/shared")


type CreateKeyXAmzTargetEnum string

const (
    CreateKeyXAmzTargetEnumTrentServiceCreateKey CreateKeyXAmzTargetEnum = "TrentService.CreateKey"
)


type CreateKeyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateKeyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateKeyRequest struct {
    Headers CreateKeyHeaders 
    Request shared.CreateKeyRequest `request:"mediaType=application/json"`
    
}

type CreateKeyResponse struct {
    CloudHsmClusterInvalidConfigurationException *interface{} 
    ContentType string 
    CreateKeyResponse *shared.CreateKeyResponse 
    CustomKeyStoreInvalidStateException *interface{} 
    CustomKeyStoreNotFoundException *interface{} 
    DependencyTimeoutException *interface{} 
    InvalidArnException *interface{} 
    KmsInternalException *interface{} 
    LimitExceededException *interface{} 
    MalformedPolicyDocumentException *interface{} 
    StatusCode int64 
    TagException *interface{} 
    UnsupportedOperationException *interface{} 
    
}

