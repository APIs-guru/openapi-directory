package operations

import (
"openapi/pkg/models/shared")


type GetContactMethodsXAmzTargetEnum string

const (
    GetContactMethodsXAmzTargetEnumLightsail20161128GetContactMethods GetContactMethodsXAmzTargetEnum = "Lightsail_20161128.GetContactMethods"
)


type GetContactMethodsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetContactMethodsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetContactMethodsRequest struct {
    Headers GetContactMethodsHeaders 
    Request shared.GetContactMethodsRequest `request:"mediaType=application/json"`
    
}

type GetContactMethodsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetContactMethodsResult *shared.GetContactMethodsResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

