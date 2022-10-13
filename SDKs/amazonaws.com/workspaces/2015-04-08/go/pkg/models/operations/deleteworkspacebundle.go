package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteWorkspaceBundleXAmzTargetEnum string

const (
	DeleteWorkspaceBundleXAmzTargetEnumWorkspacesServiceDeleteWorkspaceBundle DeleteWorkspaceBundleXAmzTargetEnum = "WorkspacesService.DeleteWorkspaceBundle"
)

type DeleteWorkspaceBundleHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteWorkspaceBundleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteWorkspaceBundleRequest struct {
	Headers DeleteWorkspaceBundleHeaders
	Request shared.DeleteWorkspaceBundleRequest `request:"mediaType=application/json"`
}

type DeleteWorkspaceBundleResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	DeleteWorkspaceBundleResult     map[string]interface{}
	InvalidParameterValuesException *interface{}
	ResourceAssociatedException     *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
