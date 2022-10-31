package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeWorkspaceImagesXAmzTargetEnum string

const (
	DescribeWorkspaceImagesXAmzTargetEnumWorkspacesServiceDescribeWorkspaceImages DescribeWorkspaceImagesXAmzTargetEnum = "WorkspacesService.DescribeWorkspaceImages"
)

type DescribeWorkspaceImagesHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeWorkspaceImagesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
