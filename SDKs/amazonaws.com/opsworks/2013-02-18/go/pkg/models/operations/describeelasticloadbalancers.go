package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeElasticLoadBalancersXAmzTargetEnum string

const (
	DescribeElasticLoadBalancersXAmzTargetEnumOpsWorks20130218DescribeElasticLoadBalancers DescribeElasticLoadBalancersXAmzTargetEnum = "OpsWorks_20130218.DescribeElasticLoadBalancers"
)

type DescribeElasticLoadBalancersHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeElasticLoadBalancersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
