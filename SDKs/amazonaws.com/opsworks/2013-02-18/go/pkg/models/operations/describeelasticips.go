package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeElasticIpsXAmzTargetEnum string

const (
	DescribeElasticIpsXAmzTargetEnumOpsWorks20130218DescribeElasticIps DescribeElasticIpsXAmzTargetEnum = "OpsWorks_20130218.DescribeElasticIps"
)

type DescribeElasticIpsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeElasticIpsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeElasticIpsRequest struct {
	Headers DescribeElasticIpsHeaders
	Request shared.DescribeElasticIpsRequest `request:"mediaType=application/json"`
}

type DescribeElasticIpsResponse struct {
	ContentType               string
	DescribeElasticIpsResult  *shared.DescribeElasticIpsResult
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
