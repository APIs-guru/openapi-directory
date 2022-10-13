package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeElasticLoadBalancersXAmzTargetEnum string

const (
	DescribeElasticLoadBalancersXAmzTargetEnumOpsWorks20130218DescribeElasticLoadBalancers DescribeElasticLoadBalancersXAmzTargetEnum = "OpsWorks_20130218.DescribeElasticLoadBalancers"
)

type DescribeElasticLoadBalancersHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeElasticLoadBalancersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeElasticLoadBalancersRequest struct {
	Headers DescribeElasticLoadBalancersHeaders
	Request shared.DescribeElasticLoadBalancersRequest `request:"mediaType=application/json"`
}

type DescribeElasticLoadBalancersResponse struct {
	ContentType                        string
	DescribeElasticLoadBalancersResult *shared.DescribeElasticLoadBalancersResult
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
	ValidationException                *interface{}
}
