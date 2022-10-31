package operations

import (
"openapi/pkg/models/shared")


type PutKeyPolicyXAmzTargetEnum string

const (
    PutKeyPolicyXAmzTargetEnumTrentServicePutKeyPolicy PutKeyPolicyXAmzTargetEnum = "TrentService.PutKeyPolicy"
)


type PutKeyPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutKeyPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutKeyPolicyRequest struct {
    Headers PutKeyPolicyHeaders 
    Request shared.PutKeyPolicyRequest `request:"mediaType=application/json"`
    
}

type PutKeyPolicyResponse struct {
    ContentType string 
    DependencyTimeoutException *interface{} 
    InvalidArnException *interface{} 
    KmsInternalException *interface{} 
    KmsInvalidStateException *interface{} 
    LimitExceededException *interface{} 
    MalformedPolicyDocumentException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnsupportedOperationException *interface{} 
    
}

