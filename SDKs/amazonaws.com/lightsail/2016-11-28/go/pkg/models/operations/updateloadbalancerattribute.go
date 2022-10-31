package operations

import (
"openapi/pkg/models/shared")


type UpdateLoadBalancerAttributeXAmzTargetEnum string

const (
    UpdateLoadBalancerAttributeXAmzTargetEnumLightsail20161128UpdateLoadBalancerAttribute UpdateLoadBalancerAttributeXAmzTargetEnum = "Lightsail_20161128.UpdateLoadBalancerAttribute"
)


type UpdateLoadBalancerAttributeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateLoadBalancerAttributeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateLoadBalancerAttributeRequest struct {
    Headers UpdateLoadBalancerAttributeHeaders 
    Request shared.UpdateLoadBalancerAttributeRequest `request:"mediaType=application/json"`
    
}

type UpdateLoadBalancerAttributeResponse struct {
    AccessDeniedException *interface{} 
    AccountSetupInProgressException *interface{} 
    ContentType string 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    UpdateLoadBalancerAttributeResult *shared.UpdateLoadBalancerAttributeResult 
    
}

