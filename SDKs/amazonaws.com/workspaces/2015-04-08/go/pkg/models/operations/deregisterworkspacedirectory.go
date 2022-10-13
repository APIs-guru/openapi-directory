package operations

import (
	"openapi/pkg/models/shared"
)

type DeregisterWorkspaceDirectoryXAmzTargetEnum string

const (
	DeregisterWorkspaceDirectoryXAmzTargetEnumWorkspacesServiceDeregisterWorkspaceDirectory DeregisterWorkspaceDirectoryXAmzTargetEnum = "WorkspacesService.DeregisterWorkspaceDirectory"
)

type DeregisterWorkspaceDirectoryHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeregisterWorkspaceDirectoryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeregisterWorkspaceDirectoryRequest struct {
	Headers DeregisterWorkspaceDirectoryHeaders
	Request shared.DeregisterWorkspaceDirectoryRequest `request:"mediaType=application/json"`
}

type DeregisterWorkspaceDirectoryResponse struct {
	AccessDeniedException              *interface{}
	ContentType                        string
	DeregisterWorkspaceDirectoryResult map[string]interface{}
	InvalidParameterValuesException    *interface{}
	InvalidResourceStateException      *interface{}
	OperationNotSupportedException     *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
}
