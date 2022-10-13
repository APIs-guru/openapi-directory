package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAppsXAmzTargetEnum string

const (
	DescribeAppsXAmzTargetEnumOpsWorks20130218DescribeApps DescribeAppsXAmzTargetEnum = "OpsWorks_20130218.DescribeApps"
)

type DescribeAppsHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAppsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeAppsRequest struct {
	Headers DescribeAppsHeaders
	Request shared.DescribeAppsRequest `request:"mediaType=application/json"`
}

type DescribeAppsResponse struct {
	ContentType               string
	DescribeAppsResult        *shared.DescribeAppsResult
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
