package operations

import (
"openapi/pkg/models/shared")


type AttachInstancesToLoadBalancerXAmzTargetEnum string

const (
    AttachInstancesToLoadBalancerXAmzTargetEnumLightsail20161128AttachInstancesToLoadBalancer AttachInstancesToLoadBalancerXAmzTargetEnum = "Lightsail_20161128.AttachInstancesToLoadBalancer"
)


type AttachInstancesToLoadBalancerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AttachInstancesToLoadBalancerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AttachInstancesToLoadBalancerRequest struct {
    Headers AttachInstancesToLoadBalancerHeaders 
    Request shared.AttachInstancesToLoadBalancerRequest `request:"mediaType=application/json"`
    
}

type AttachInstancesToLoadBalancerResponse struct {
    AccessDeniedException *interface{} 
    AccountSetupInProgressException *interface{} 
    AttachInstancesToLoadBalancerResult *shared.AttachInstancesToLoadBalancerResult 
    ContentType string 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

