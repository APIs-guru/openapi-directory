package operations

import (
	"openapi/pkg/models/shared"
)

type DetachInstancesFromLoadBalancerXAmzTargetEnum string

const (
	DetachInstancesFromLoadBalancerXAmzTargetEnumLightsail20161128DetachInstancesFromLoadBalancer DetachInstancesFromLoadBalancerXAmzTargetEnum = "Lightsail_20161128.DetachInstancesFromLoadBalancer"
)

type DetachInstancesFromLoadBalancerHeaders struct {
	XAmzAlgorithm     *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DetachInstancesFromLoadBalancerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DetachInstancesFromLoadBalancerRequest struct {
	Headers DetachInstancesFromLoadBalancerHeaders
	Request shared.DetachInstancesFromLoadBalancerRequest `request:"mediaType=application/json"`
}

type DetachInstancesFromLoadBalancerResponse struct {
	AccessDeniedException                 *interface{}
	AccountSetupInProgressException       *interface{}
	ContentType                           string
	DetachInstancesFromLoadBalancerResult *shared.DetachInstancesFromLoadBalancerResult
	InvalidInputException                 *interface{}
	NotFoundException                     *interface{}
	OperationFailureException             *interface{}
	ServiceException                      *interface{}
	StatusCode                            int64
	UnauthenticatedException              *interface{}
}
