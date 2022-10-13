package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeInstancesXAmzTargetEnum string

const (
	DescribeInstancesXAmzTargetEnumOpsWorks20130218DescribeInstances DescribeInstancesXAmzTargetEnum = "OpsWorks_20130218.DescribeInstances"
)

type DescribeInstancesHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeInstancesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeInstancesRequest struct {
	Headers DescribeInstancesHeaders
	Request shared.DescribeInstancesRequest `request:"mediaType=application/json"`
}

type DescribeInstancesResponse struct {
	ContentType               string
	DescribeInstancesResult   *shared.DescribeInstancesResult
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
