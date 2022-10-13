package operations

import (
	"openapi/pkg/models/shared"
)

type CopyWorkspaceImageXAmzTargetEnum string

const (
	CopyWorkspaceImageXAmzTargetEnumWorkspacesServiceCopyWorkspaceImage CopyWorkspaceImageXAmzTargetEnum = "WorkspacesService.CopyWorkspaceImage"
)

type CopyWorkspaceImageHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CopyWorkspaceImageXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CopyWorkspaceImageRequest struct {
	Headers CopyWorkspaceImageHeaders
	Request shared.CopyWorkspaceImageRequest `request:"mediaType=application/json"`
}

type CopyWorkspaceImageResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	CopyWorkspaceImageResult        *shared.CopyWorkspaceImageResult
	InvalidParameterValuesException *interface{}
	OperationNotSupportedException  *interface{}
	ResourceAlreadyExistsException  *interface{}
	ResourceLimitExceededException  *interface{}
	ResourceNotFoundException       *interface{}
	ResourceUnavailableException    *interface{}
	StatusCode                      int64
}
