package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCommandsXAmzTargetEnum string

const (
	DescribeCommandsXAmzTargetEnumOpsWorks20130218DescribeCommands DescribeCommandsXAmzTargetEnum = "OpsWorks_20130218.DescribeCommands"
)

type DescribeCommandsHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeCommandsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeCommandsRequest struct {
	Headers DescribeCommandsHeaders
	Request shared.DescribeCommandsRequest `request:"mediaType=application/json"`
}

type DescribeCommandsResponse struct {
	ContentType               string
	DescribeCommandsResult    *shared.DescribeCommandsResult
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
