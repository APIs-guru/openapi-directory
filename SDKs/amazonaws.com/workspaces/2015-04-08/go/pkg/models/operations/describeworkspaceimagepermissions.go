package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeWorkspaceImagePermissionsXAmzTargetEnum string

const (
	DescribeWorkspaceImagePermissionsXAmzTargetEnumWorkspacesServiceDescribeWorkspaceImagePermissions DescribeWorkspaceImagePermissionsXAmzTargetEnum = "WorkspacesService.DescribeWorkspaceImagePermissions"
)

type DescribeWorkspaceImagePermissionsHeaders struct {
	XAmzAlgorithm     *string                                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeWorkspaceImagePermissionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeWorkspaceImagePermissionsRequest struct {
	Headers DescribeWorkspaceImagePermissionsHeaders
	Request shared.DescribeWorkspaceImagePermissionsRequest `request:"mediaType=application/json"`
}

type DescribeWorkspaceImagePermissionsResponse struct {
	AccessDeniedException                   *interface{}
	ContentType                             string
	DescribeWorkspaceImagePermissionsResult *shared.DescribeWorkspaceImagePermissionsResult
	InvalidParameterValuesException         *interface{}
	ResourceNotFoundException               *interface{}
	StatusCode                              int64
}
