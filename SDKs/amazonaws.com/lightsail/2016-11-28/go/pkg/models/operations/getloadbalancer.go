package operations

import (
	"openapi/pkg/models/shared"
)

type GetLoadBalancerXAmzTargetEnum string

const (
	GetLoadBalancerXAmzTargetEnumLightsail20161128GetLoadBalancer GetLoadBalancerXAmzTargetEnum = "Lightsail_20161128.GetLoadBalancer"
)

type GetLoadBalancerHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetLoadBalancerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetLoadBalancerRequest struct {
	Headers GetLoadBalancerHeaders
	Request shared.GetLoadBalancerRequest `request:"mediaType=application/json"`
}

type GetLoadBalancerResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	GetLoadBalancerResult           *shared.GetLoadBalancerResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
