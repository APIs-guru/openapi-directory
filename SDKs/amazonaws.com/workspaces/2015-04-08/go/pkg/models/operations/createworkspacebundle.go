package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWorkspaceBundleXAmzTargetEnum string

const (
	CreateWorkspaceBundleXAmzTargetEnumWorkspacesServiceCreateWorkspaceBundle CreateWorkspaceBundleXAmzTargetEnum = "WorkspacesService.CreateWorkspaceBundle"
)

type CreateWorkspaceBundleHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateWorkspaceBundleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateWorkspaceBundleRequest struct {
	Headers CreateWorkspaceBundleHeaders
	Request shared.CreateWorkspaceBundleRequest `request:"mediaType=application/json"`
}

type CreateWorkspaceBundleResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	CreateWorkspaceBundleResult     *shared.CreateWorkspaceBundleResult
	InvalidParameterValuesException *interface{}
	ResourceAlreadyExistsException  *interface{}
	ResourceLimitExceededException  *interface{}
	ResourceNotFoundException       *interface{}
	ResourceUnavailableException    *interface{}
	StatusCode                      int64
}
