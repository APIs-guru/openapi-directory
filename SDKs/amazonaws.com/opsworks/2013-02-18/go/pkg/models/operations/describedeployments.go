package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDeploymentsXAmzTargetEnum string

const (
	DescribeDeploymentsXAmzTargetEnumOpsWorks20130218DescribeDeployments DescribeDeploymentsXAmzTargetEnum = "OpsWorks_20130218.DescribeDeployments"
)

type DescribeDeploymentsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDeploymentsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeDeploymentsRequest struct {
	Headers DescribeDeploymentsHeaders
	Request shared.DescribeDeploymentsRequest `request:"mediaType=application/json"`
}

type DescribeDeploymentsResponse struct {
	ContentType               string
	DescribeDeploymentsResult *shared.DescribeDeploymentsResult
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
