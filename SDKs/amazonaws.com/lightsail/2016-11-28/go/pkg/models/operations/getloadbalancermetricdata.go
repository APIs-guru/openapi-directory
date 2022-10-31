package operations

import (
	"openapi/pkg/models/shared"
)

type GetLoadBalancerMetricDataXAmzTargetEnum string

const (
	GetLoadBalancerMetricDataXAmzTargetEnumLightsail20161128GetLoadBalancerMetricData GetLoadBalancerMetricDataXAmzTargetEnum = "Lightsail_20161128.GetLoadBalancerMetricData"
)

type GetLoadBalancerMetricDataHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetLoadBalancerMetricDataXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetLoadBalancerMetricDataRequest struct {
	Headers GetLoadBalancerMetricDataHeaders
	Request shared.GetLoadBalancerMetricDataRequest `request:"mediaType=application/json"`
}

type GetLoadBalancerMetricDataResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	GetLoadBalancerMetricDataResult *shared.GetLoadBalancerMetricDataResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
