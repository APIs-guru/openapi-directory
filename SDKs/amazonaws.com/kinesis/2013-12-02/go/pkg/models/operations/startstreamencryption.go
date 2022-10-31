package operations

import (
"openapi/pkg/models/shared")


type StartStreamEncryptionXAmzTargetEnum string

const (
    StartStreamEncryptionXAmzTargetEnumKinesis20131202StartStreamEncryption StartStreamEncryptionXAmzTargetEnum = "Kinesis_20131202.StartStreamEncryption"
)


type StartStreamEncryptionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartStreamEncryptionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartStreamEncryptionRequest struct {
    Headers StartStreamEncryptionHeaders 
    Request shared.StartStreamEncryptionInput `request:"mediaType=application/json"`
    
}

type StartStreamEncryptionResponse struct {
    ContentType string 
    InvalidArgumentException *interface{} 
    KmsAccessDeniedException *interface{} 
    KmsDisabledException *interface{} 
    KmsInvalidStateException *interface{} 
    KmsNotFoundException *interface{} 
    KmsOptInRequired *interface{} 
    KmsThrottlingException *interface{} 
    LimitExceededException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

