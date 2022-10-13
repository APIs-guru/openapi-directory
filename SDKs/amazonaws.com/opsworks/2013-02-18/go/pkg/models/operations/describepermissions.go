package operations

import (
	"openapi/pkg/models/shared"
)

type DescribePermissionsXAmzTargetEnum string

const (
	DescribePermissionsXAmzTargetEnumOpsWorks20130218DescribePermissions DescribePermissionsXAmzTargetEnum = "OpsWorks_20130218.DescribePermissions"
)

type DescribePermissionsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribePermissionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribePermissionsRequest struct {
	Headers DescribePermissionsHeaders
	Request shared.DescribePermissionsRequest `request:"mediaType=application/json"`
}

type DescribePermissionsResponse struct {
	ContentType               string
	DescribePermissionsResult *shared.DescribePermissionsResult
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
