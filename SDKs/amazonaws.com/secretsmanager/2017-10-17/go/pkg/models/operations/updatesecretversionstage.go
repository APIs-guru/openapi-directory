package operations

import (
"openapi/pkg/models/shared")


type UpdateSecretVersionStageXAmzTargetEnum string

const (
    UpdateSecretVersionStageXAmzTargetEnumSecretsmanagerUpdateSecretVersionStage UpdateSecretVersionStageXAmzTargetEnum = "secretsmanager.UpdateSecretVersionStage"
)


type UpdateSecretVersionStageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateSecretVersionStageXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateSecretVersionStageRequest struct {
    Headers UpdateSecretVersionStageHeaders 
    Request shared.UpdateSecretVersionStageRequest `request:"mediaType=application/json"`
    
}

type UpdateSecretVersionStageResponse struct {
    ContentType string 
    InternalServiceError *interface{} 
    InvalidParameterException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UpdateSecretVersionStageResponse *shared.UpdateSecretVersionStageResponse 
    
}

