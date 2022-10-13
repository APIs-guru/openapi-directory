package operations

import (
	"openapi/pkg/models/shared"
)

type RestoreWorkspaceXAmzTargetEnum string

const (
	RestoreWorkspaceXAmzTargetEnumWorkspacesServiceRestoreWorkspace RestoreWorkspaceXAmzTargetEnum = "WorkspacesService.RestoreWorkspace"
)

type RestoreWorkspaceHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RestoreWorkspaceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RestoreWorkspaceRequest struct {
	Headers RestoreWorkspaceHeaders
	Request shared.RestoreWorkspaceRequest `request:"mediaType=application/json"`
}

type RestoreWorkspaceResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	InvalidParameterValuesException *interface{}
	ResourceNotFoundException       *interface{}
	RestoreWorkspaceResult          map[string]interface{}
	StatusCode                      int64
}
