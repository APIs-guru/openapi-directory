package operations

import (
	"openapi/pkg/models/shared"
)

type ModifyWorkspaceStateXAmzTargetEnum string

const (
	ModifyWorkspaceStateXAmzTargetEnumWorkspacesServiceModifyWorkspaceState ModifyWorkspaceStateXAmzTargetEnum = "WorkspacesService.ModifyWorkspaceState"
)

type ModifyWorkspaceStateHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ModifyWorkspaceStateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ModifyWorkspaceStateRequest struct {
	Headers ModifyWorkspaceStateHeaders
	Request shared.ModifyWorkspaceStateRequest `request:"mediaType=application/json"`
}

type ModifyWorkspaceStateResponse struct {
	ContentType                     string
	InvalidParameterValuesException *interface{}
	InvalidResourceStateException   *interface{}
	ModifyWorkspaceStateResult      map[string]interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
