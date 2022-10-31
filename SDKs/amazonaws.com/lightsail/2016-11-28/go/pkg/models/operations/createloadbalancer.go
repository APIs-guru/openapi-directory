package operations

import (
"openapi/pkg/models/shared")


type CreateLoadBalancerXAmzTargetEnum string

const (
    CreateLoadBalancerXAmzTargetEnumLightsail20161128CreateLoadBalancer CreateLoadBalancerXAmzTargetEnum = "Lightsail_20161128.CreateLoadBalancer"
)


type CreateLoadBalancerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateLoadBalancerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateLoadBalancerRequest struct {
    Headers CreateLoadBalancerHeaders 
    Request shared.CreateLoadBalancerRequest `request:"mediaType=application/json"`
    
}

type CreateLoadBalancerResponse struct {
    AccessDeniedException *interface{} 
    AccountSetupInProgressException *interface{} 
    ContentType string 
    CreateLoadBalancerResult *shared.CreateLoadBalancerResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

