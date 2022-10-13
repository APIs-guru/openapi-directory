package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteWorkspaceImageXAmzTargetEnum string

const (
	DeleteWorkspaceImageXAmzTargetEnumWorkspacesServiceDeleteWorkspaceImage DeleteWorkspaceImageXAmzTargetEnum = "WorkspacesService.DeleteWorkspaceImage"
)

type DeleteWorkspaceImageHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteWorkspaceImageXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteWorkspaceImageRequest struct {
	Headers DeleteWorkspaceImageHeaders
	Request shared.DeleteWorkspaceImageRequest `request:"mediaType=application/json"`
}

type DeleteWorkspaceImageResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	DeleteWorkspaceImageResult    map[string]interface{}
	InvalidResourceStateException *interface{}
	ResourceAssociatedException   *interface{}
	StatusCode                    int64
}
