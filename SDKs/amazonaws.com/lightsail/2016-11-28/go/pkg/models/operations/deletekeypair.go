package operations

import (
"openapi/pkg/models/shared")


type DeleteKeyPairXAmzTargetEnum string

const (
    DeleteKeyPairXAmzTargetEnumLightsail20161128DeleteKeyPair DeleteKeyPairXAmzTargetEnum = "Lightsail_20161128.DeleteKeyPair"
)


type DeleteKeyPairHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteKeyPairXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteKeyPairRequest struct {
    Headers DeleteKeyPairHeaders 
    Request shared.DeleteKeyPairRequest `request:"mediaType=application/json"`
    
}

type DeleteKeyPairResponse struct {
    AccessDeniedException *interface{} 
    AccountSetupInProgressException *interface{} 
    ContentType string 
    DeleteKeyPairResult *shared.DeleteKeyPairResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

