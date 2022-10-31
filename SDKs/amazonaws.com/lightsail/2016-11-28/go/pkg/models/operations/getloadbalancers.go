package operations

import (
"openapi/pkg/models/shared")


type GetLoadBalancersXAmzTargetEnum string

const (
    GetLoadBalancersXAmzTargetEnumLightsail20161128GetLoadBalancers GetLoadBalancersXAmzTargetEnum = "Lightsail_20161128.GetLoadBalancers"
)


type GetLoadBalancersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetLoadBalancersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetLoadBalancersRequest struct {
    Headers GetLoadBalancersHeaders 
    Request shared.GetLoadBalancersRequest `request:"mediaType=application/json"`
    
}

type GetLoadBalancersResponse struct {
    AccessDeniedException *interface{} 
    AccountSetupInProgressException *interface{} 
    ContentType string 
    GetLoadBalancersResult *shared.GetLoadBalancersResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

