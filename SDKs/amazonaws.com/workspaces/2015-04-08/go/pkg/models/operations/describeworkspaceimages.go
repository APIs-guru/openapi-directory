package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeWorkspaceImagesXAmzTargetEnum string

const (
	DescribeWorkspaceImagesXAmzTargetEnumWorkspacesServiceDescribeWorkspaceImages DescribeWorkspaceImagesXAmzTargetEnum = "WorkspacesService.DescribeWorkspaceImages"
)

type DescribeWorkspaceImagesHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeWorkspaceImagesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeWorkspaceImagesRequest struct {
	Headers DescribeWorkspaceImagesHeaders
	Request shared.DescribeWorkspaceImagesRequest `request:"mediaType=application/json"`
}

type DescribeWorkspaceImagesResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	DescribeWorkspaceImagesResult *shared.DescribeWorkspaceImagesResult
	StatusCode                    int64
}
