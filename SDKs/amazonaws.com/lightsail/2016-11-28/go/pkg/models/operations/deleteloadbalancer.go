package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLoadBalancerXAmzTargetEnum string

const (
	DeleteLoadBalancerXAmzTargetEnumLightsail20161128DeleteLoadBalancer DeleteLoadBalancerXAmzTargetEnum = "Lightsail_20161128.DeleteLoadBalancer"
)

type DeleteLoadBalancerHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteLoadBalancerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteLoadBalancerRequest struct {
	Headers DeleteLoadBalancerHeaders
	Request shared.DeleteLoadBalancerRequest `request:"mediaType=application/json"`
}

type DeleteLoadBalancerResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	DeleteLoadBalancerResult        *shared.DeleteLoadBalancerResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
