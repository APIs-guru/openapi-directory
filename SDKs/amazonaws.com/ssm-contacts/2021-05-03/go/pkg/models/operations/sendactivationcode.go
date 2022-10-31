package operations

import (
"openapi/pkg/models/shared")


type SendActivationCodeXAmzTargetEnum string

const (
    SendActivationCodeXAmzTargetEnumSsmContactsSendActivationCode SendActivationCodeXAmzTargetEnum = "SSMContacts.SendActivationCode"
)


type SendActivationCodeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget SendActivationCodeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type SendActivationCodeRequest struct {
    Headers SendActivationCodeHeaders 
    Request shared.SendActivationCodeRequest `request:"mediaType=application/json"`
    
}

type SendActivationCodeResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DataEncryptionException *interface{} 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    SendActivationCodeResult map[string]interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

