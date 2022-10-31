package operations

import (
	"openapi/pkg/models/shared"
)

type ImportWorkspaceImageXAmzTargetEnum string

const (
	ImportWorkspaceImageXAmzTargetEnumWorkspacesServiceImportWorkspaceImage ImportWorkspaceImageXAmzTargetEnum = "WorkspacesService.ImportWorkspaceImage"
)

type ImportWorkspaceImageHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ImportWorkspaceImageXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ImportWorkspaceImageRequest struct {
	Headers ImportWorkspaceImageHeaders
	Request shared.ImportWorkspaceImageRequest `request:"mediaType=application/json"`
}

type ImportWorkspaceImageResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	ImportWorkspaceImageResult      *shared.ImportWorkspaceImageResult
	InvalidParameterValuesException *interface{}
	OperationNotSupportedException  *interface{}
	ResourceAlreadyExistsException  *interface{}
	ResourceLimitExceededException  *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
