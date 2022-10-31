package operations

import (
"openapi/pkg/models/shared")


type GetOperationsForResourceXAmzTargetEnum string

const (
    GetOperationsForResourceXAmzTargetEnumLightsail20161128GetOperationsForResource GetOperationsForResourceXAmzTargetEnum = "Lightsail_20161128.GetOperationsForResource"
)


type GetOperationsForResourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetOperationsForResourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetOperationsForResourceRequest struct {
    Headers GetOperationsForResourceHeaders 
    Request shared.GetOperationsForResourceRequest `request:"mediaType=application/json"`
    
}

type GetOperationsForResourceResponse struct {
    AccessDeniedException *interface{} 
    AccountSetupInProgressException *interface{} 
    ContentType string 
    GetOperationsForResourceResult *shared.GetOperationsForResourceResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

