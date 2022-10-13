package operations

import (
	"openapi/pkg/models/shared"
)

type DetachElasticLoadBalancerXAmzTargetEnum string

const (
	DetachElasticLoadBalancerXAmzTargetEnumOpsWorks20130218DetachElasticLoadBalancer DetachElasticLoadBalancerXAmzTargetEnum = "OpsWorks_20130218.DetachElasticLoadBalancer"
)

type DetachElasticLoadBalancerHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DetachElasticLoadBalancerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DetachElasticLoadBalancerRequest struct {
	Headers DetachElasticLoadBalancerHeaders
	Request shared.DetachElasticLoadBalancerRequest `request:"mediaType=application/json"`
}

type DetachElasticLoadBalancerResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
