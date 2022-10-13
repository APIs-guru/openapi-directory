package operations

import (
	"openapi/pkg/models/shared"
)

type GetLoadBalancersXAmzTargetEnum string

const (
	GetLoadBalancersXAmzTargetEnumLightsail20161128GetLoadBalancers GetLoadBalancersXAmzTargetEnum = "Lightsail_20161128.GetLoadBalancers"
)

type GetLoadBalancersHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetLoadBalancersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetLoadBalancersRequest struct {
	Headers GetLoadBalancersHeaders
	Request shared.GetLoadBalancersRequest `request:"mediaType=application/json"`
}

type GetLoadBalancersResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	GetLoadBalancersResult          *shared.GetLoadBalancersResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
