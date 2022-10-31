package operations

import (
	"openapi/pkg/models/shared"
)

type AttachLoadBalancerTLSCertificateXAmzTargetEnum string

const (
	AttachLoadBalancerTLSCertificateXAmzTargetEnumLightsail20161128AttachLoadBalancerTLSCertificate AttachLoadBalancerTLSCertificateXAmzTargetEnum = "Lightsail_20161128.AttachLoadBalancerTlsCertificate"
)

type AttachLoadBalancerTLSCertificateHeaders struct {
	XAmzAlgorithm     *string                                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AttachLoadBalancerTLSCertificateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AttachLoadBalancerTLSCertificateRequest struct {
	Headers AttachLoadBalancerTLSCertificateHeaders
	Request shared.AttachLoadBalancerTLSCertificateRequest `request:"mediaType=application/json"`
}

type AttachLoadBalancerTLSCertificateResponse struct {
	AccessDeniedException                  *interface{}
	AccountSetupInProgressException        *interface{}
	AttachLoadBalancerTLSCertificateResult *shared.AttachLoadBalancerTLSCertificateResult
	ContentType                            string
	InvalidInputException                  *interface{}
	NotFoundException                      *interface{}
	OperationFailureException              *interface{}
	ServiceException                       *interface{}
	StatusCode                             int64
	UnauthenticatedException               *interface{}
}
