package operations

import (
"openapi/pkg/models/shared")


type CreateLoadBalancerTLSCertificateXAmzTargetEnum string

const (
    CreateLoadBalancerTLSCertificateXAmzTargetEnumLightsail20161128CreateLoadBalancerTLSCertificate CreateLoadBalancerTLSCertificateXAmzTargetEnum = "Lightsail_20161128.CreateLoadBalancerTlsCertificate"
)


type CreateLoadBalancerTLSCertificateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateLoadBalancerTLSCertificateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateLoadBalancerTLSCertificateRequest struct {
    Headers CreateLoadBalancerTLSCertificateHeaders 
    Request shared.CreateLoadBalancerTLSCertificateRequest `request:"mediaType=application/json"`
    
}

type CreateLoadBalancerTLSCertificateResponse struct {
    AccessDeniedException *interface{} 
    AccountSetupInProgressException *interface{} 
    ContentType string 
    CreateLoadBalancerTLSCertificateResult *shared.CreateLoadBalancerTLSCertificateResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

