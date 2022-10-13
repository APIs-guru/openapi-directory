package operations

import (
	"openapi/pkg/models/shared"
)

type MigrateWorkspaceXAmzTargetEnum string

const (
	MigrateWorkspaceXAmzTargetEnumWorkspacesServiceMigrateWorkspace MigrateWorkspaceXAmzTargetEnum = "WorkspacesService.MigrateWorkspace"
)

type MigrateWorkspaceHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        MigrateWorkspaceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type MigrateWorkspaceRequest struct {
	Headers MigrateWorkspaceHeaders
	Request shared.MigrateWorkspaceRequest `request:"mediaType=application/json"`
}

type MigrateWorkspaceResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	InvalidParameterValuesException *interface{}
	MigrateWorkspaceResult          *shared.MigrateWorkspaceResult
	OperationInProgressException    *interface{}
	OperationNotSupportedException  *interface{}
	ResourceNotFoundException       *interface{}
	ResourceUnavailableException    *interface{}
	StatusCode                      int64
}
