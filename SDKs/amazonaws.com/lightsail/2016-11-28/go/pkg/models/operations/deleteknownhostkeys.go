package operations

import (
"openapi/pkg/models/shared")


type DeleteKnownHostKeysXAmzTargetEnum string

const (
    DeleteKnownHostKeysXAmzTargetEnumLightsail20161128DeleteKnownHostKeys DeleteKnownHostKeysXAmzTargetEnum = "Lightsail_20161128.DeleteKnownHostKeys"
)


type DeleteKnownHostKeysHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteKnownHostKeysXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteKnownHostKeysRequest struct {
    Headers DeleteKnownHostKeysHeaders 
    Request shared.DeleteKnownHostKeysRequest `request:"mediaType=application/json"`
    
}

type DeleteKnownHostKeysResponse struct {
    AccessDeniedException *interface{} 
    AccountSetupInProgressException *interface{} 
    ContentType string 
    DeleteKnownHostKeysResult *shared.DeleteKnownHostKeysResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

