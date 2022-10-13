package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateWorkspaceBundleXAmzTargetEnum string

const (
	UpdateWorkspaceBundleXAmzTargetEnumWorkspacesServiceUpdateWorkspaceBundle UpdateWorkspaceBundleXAmzTargetEnum = "WorkspacesService.UpdateWorkspaceBundle"
)

type UpdateWorkspaceBundleHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateWorkspaceBundleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateWorkspaceBundleRequest struct {
	Headers UpdateWorkspaceBundleHeaders
	Request shared.UpdateWorkspaceBundleRequest `request:"mediaType=application/json"`
}

type UpdateWorkspaceBundleResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	InvalidParameterValuesException *interface{}
	ResourceNotFoundException       *interface{}
	ResourceUnavailableException    *interface{}
	StatusCode                      int64
	UpdateWorkspaceBundleResult     map[string]interface{}
}
