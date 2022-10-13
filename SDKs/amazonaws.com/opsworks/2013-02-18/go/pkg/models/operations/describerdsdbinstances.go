package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeRdsDbInstancesXAmzTargetEnum string

const (
	DescribeRdsDbInstancesXAmzTargetEnumOpsWorks20130218DescribeRdsDbInstances DescribeRdsDbInstancesXAmzTargetEnum = "OpsWorks_20130218.DescribeRdsDbInstances"
)

type DescribeRdsDbInstancesHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeRdsDbInstancesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeRdsDbInstancesRequest struct {
	Headers DescribeRdsDbInstancesHeaders
	Request shared.DescribeRdsDbInstancesRequest `request:"mediaType=application/json"`
}

type DescribeRdsDbInstancesResponse struct {
	ContentType                  string
	DescribeRdsDbInstancesResult *shared.DescribeRdsDbInstancesResult
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
