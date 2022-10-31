package operations

import (
"openapi/pkg/models/shared")


type StopStreamEncryptionXAmzTargetEnum string

const (
    StopStreamEncryptionXAmzTargetEnumKinesis20131202StopStreamEncryption StopStreamEncryptionXAmzTargetEnum = "Kinesis_20131202.StopStreamEncryption"
)


type StopStreamEncryptionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StopStreamEncryptionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StopStreamEncryptionRequest struct {
    Headers StopStreamEncryptionHeaders 
    Request shared.StopStreamEncryptionInput `request:"mediaType=application/json"`
    
}

type StopStreamEncryptionResponse struct {
    ContentType string 
    InvalidArgumentException *interface{} 
    LimitExceededException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

