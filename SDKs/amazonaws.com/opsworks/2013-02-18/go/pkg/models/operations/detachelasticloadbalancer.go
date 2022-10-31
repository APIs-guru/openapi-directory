package operations

import (
	"openapi/pkg/models/shared"
)

type DetachElasticLoadBalancerXAmzTargetEnum string

const (
	DetachElasticLoadBalancerXAmzTargetEnumOpsWorks20130218DetachElasticLoadBalancer DetachElasticLoadBalancerXAmzTargetEnum = "OpsWorks_20130218.DetachElasticLoadBalancer"
)

type DetachElasticLoadBalancerHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DetachElasticLoadBalancerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
