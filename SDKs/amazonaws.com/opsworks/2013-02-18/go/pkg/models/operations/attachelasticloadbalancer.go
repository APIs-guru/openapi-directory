package operations

import (
	"openapi/pkg/models/shared"
)

type AttachElasticLoadBalancerXAmzTargetEnum string

const (
	AttachElasticLoadBalancerXAmzTargetEnumOpsWorks20130218AttachElasticLoadBalancer AttachElasticLoadBalancerXAmzTargetEnum = "OpsWorks_20130218.AttachElasticLoadBalancer"
)

type AttachElasticLoadBalancerHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AttachElasticLoadBalancerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AttachElasticLoadBalancerRequest struct {
	Headers AttachElasticLoadBalancerHeaders
	Request shared.AttachElasticLoadBalancerRequest `request:"mediaType=application/json"`
}

type AttachElasticLoadBalancerResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
