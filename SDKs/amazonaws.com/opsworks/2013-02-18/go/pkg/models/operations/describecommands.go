package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCommandsXAmzTargetEnum string

const (
	DescribeCommandsXAmzTargetEnumOpsWorks20130218DescribeCommands DescribeCommandsXAmzTargetEnum = "OpsWorks_20130218.DescribeCommands"
)

type DescribeCommandsHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeCommandsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
