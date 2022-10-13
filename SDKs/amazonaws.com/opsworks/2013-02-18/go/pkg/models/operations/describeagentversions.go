package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAgentVersionsXAmzTargetEnum string

const (
	DescribeAgentVersionsXAmzTargetEnumOpsWorks20130218DescribeAgentVersions DescribeAgentVersionsXAmzTargetEnum = "OpsWorks_20130218.DescribeAgentVersions"
)

type DescribeAgentVersionsHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAgentVersionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeAgentVersionsRequest struct {
	Headers DescribeAgentVersionsHeaders
	Request shared.DescribeAgentVersionsRequest `request:"mediaType=application/json"`
}

type DescribeAgentVersionsResponse struct {
	ContentType                 string
	DescribeAgentVersionsResult *shared.DescribeAgentVersionsResult
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	ValidationException         *interface{}
}
