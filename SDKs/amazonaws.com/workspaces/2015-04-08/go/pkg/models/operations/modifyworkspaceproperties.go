package operations

import (
	"openapi/pkg/models/shared"
)

type ModifyWorkspacePropertiesXAmzTargetEnum string

const (
	ModifyWorkspacePropertiesXAmzTargetEnumWorkspacesServiceModifyWorkspaceProperties ModifyWorkspacePropertiesXAmzTargetEnum = "WorkspacesService.ModifyWorkspaceProperties"
)

type ModifyWorkspacePropertiesHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ModifyWorkspacePropertiesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ModifyWorkspacePropertiesRequest struct {
	Headers ModifyWorkspacePropertiesHeaders
	Request shared.ModifyWorkspacePropertiesRequest `request:"mediaType=application/json"`
}

type ModifyWorkspacePropertiesResponse struct {
	AccessDeniedException                      *interface{}
	ContentType                                string
	InvalidParameterValuesException            *interface{}
	InvalidResourceStateException              *interface{}
	ModifyWorkspacePropertiesResult            map[string]interface{}
	OperationInProgressException               *interface{}
	ResourceNotFoundException                  *interface{}
	ResourceUnavailableException               *interface{}
	StatusCode                                 int64
	UnsupportedWorkspaceConfigurationException *interface{}
}
