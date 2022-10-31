package operations

import (
"openapi/pkg/models/shared")


type UpdateSecretXAmzTargetEnum string

const (
    UpdateSecretXAmzTargetEnumSecretsmanagerUpdateSecret UpdateSecretXAmzTargetEnum = "secretsmanager.UpdateSecret"
)


type UpdateSecretHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateSecretXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateSecretRequest struct {
    Headers UpdateSecretHeaders 
    Request shared.UpdateSecretRequest `request:"mediaType=application/json"`
    
}

type UpdateSecretResponse struct {
    ContentType string 
    EncryptionFailure *interface{} 
    InternalServiceError *interface{} 
    InvalidParameterException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    MalformedPolicyDocumentException *interface{} 
    PreconditionNotMetException *interface{} 
    ResourceExistsException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UpdateSecretResponse *shared.UpdateSecretResponse 
    
}

