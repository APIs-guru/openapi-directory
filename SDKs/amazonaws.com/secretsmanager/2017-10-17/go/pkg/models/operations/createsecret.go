package operations

import (
"openapi/pkg/models/shared")


type CreateSecretXAmzTargetEnum string

const (
    CreateSecretXAmzTargetEnumSecretsmanagerCreateSecret CreateSecretXAmzTargetEnum = "secretsmanager.CreateSecret"
)


type CreateSecretHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateSecretXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateSecretRequest struct {
    Headers CreateSecretHeaders 
    Request shared.CreateSecretRequest `request:"mediaType=application/json"`
    
}

type CreateSecretResponse struct {
    ContentType string 
    CreateSecretResponse *shared.CreateSecretResponse 
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
    
}

