package operations

import (
	"openapi/pkg/models/shared"
)

type GetLoadBalancerTLSCertificatesXAmzTargetEnum string

const (
	GetLoadBalancerTLSCertificatesXAmzTargetEnumLightsail20161128GetLoadBalancerTLSCertificates GetLoadBalancerTLSCertificatesXAmzTargetEnum = "Lightsail_20161128.GetLoadBalancerTlsCertificates"
)

type GetLoadBalancerTLSCertificatesHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetLoadBalancerTLSCertificatesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetLoadBalancerTLSCertificatesRequest struct {
	Headers GetLoadBalancerTLSCertificatesHeaders
	Request shared.GetLoadBalancerTLSCertificatesRequest `request:"mediaType=application/json"`
}

type GetLoadBalancerTLSCertificatesResponse struct {
	AccessDeniedException                *interface{}
	AccountSetupInProgressException      *interface{}
	ContentType                          string
	GetLoadBalancerTLSCertificatesResult *shared.GetLoadBalancerTLSCertificatesResult
	InvalidInputException                *interface{}
	NotFoundException                    *interface{}
	OperationFailureException            *interface{}
	ServiceException                     *interface{}
	StatusCode                           int64
	UnauthenticatedException             *interface{}
}
