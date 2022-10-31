package operations

import (
"openapi/pkg/models/shared")


type GetStaticIPXAmzTargetEnum string

const (
    GetStaticIPXAmzTargetEnumLightsail20161128GetStaticIP GetStaticIPXAmzTargetEnum = "Lightsail_20161128.GetStaticIp"
)


type GetStaticIPHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetStaticIPXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetStaticIPRequest struct {
    Headers GetStaticIPHeaders 
    Request shared.GetStaticIPRequest `request:"mediaType=application/json"`
    
}

type GetStaticIPResponse struct {
    AccessDeniedException *interface{} 
    AccountSetupInProgressException *interface{} 
    ContentType string 
    GetStaticIPResult *shared.GetStaticIPResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

