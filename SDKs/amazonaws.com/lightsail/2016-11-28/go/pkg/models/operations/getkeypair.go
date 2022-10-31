package operations

import (
"openapi/pkg/models/shared")


type GetKeyPairXAmzTargetEnum string

const (
    GetKeyPairXAmzTargetEnumLightsail20161128GetKeyPair GetKeyPairXAmzTargetEnum = "Lightsail_20161128.GetKeyPair"
)


type GetKeyPairHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetKeyPairXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetKeyPairRequest struct {
    Headers GetKeyPairHeaders 
    Request shared.GetKeyPairRequest `request:"mediaType=application/json"`
    
}

type GetKeyPairResponse struct {
    AccessDeniedException *interface{} 
    AccountSetupInProgressException *interface{} 
    ContentType string 
    GetKeyPairResult *shared.GetKeyPairResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

