package operations

import (
"openapi/pkg/models/shared")


type RestoreSecretXAmzTargetEnum string

const (
    RestoreSecretXAmzTargetEnumSecretsmanagerRestoreSecret RestoreSecretXAmzTargetEnum = "secretsmanager.RestoreSecret"
)


type RestoreSecretHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RestoreSecretXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RestoreSecretRequest struct {
    Headers RestoreSecretHeaders 
    Request shared.RestoreSecretRequest `request:"mediaType=application/json"`
    
}

type RestoreSecretResponse struct {
    ContentType string 
    InternalServiceError *interface{} 
    InvalidParameterException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    RestoreSecretResponse *shared.RestoreSecretResponse 
    StatusCode int64 
    
}

