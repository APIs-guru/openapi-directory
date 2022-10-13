package operations

import (
	"openapi/pkg/models/shared"
)

type ModifyWorkspaceCreationPropertiesXAmzTargetEnum string

const (
	ModifyWorkspaceCreationPropertiesXAmzTargetEnumWorkspacesServiceModifyWorkspaceCreationProperties ModifyWorkspaceCreationPropertiesXAmzTargetEnum = "WorkspacesService.ModifyWorkspaceCreationProperties"
)

type ModifyWorkspaceCreationPropertiesHeaders struct {
	XAmzAlgorithm     *string                                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ModifyWorkspaceCreationPropertiesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ModifyWorkspaceCreationPropertiesRequest struct {
	Headers ModifyWorkspaceCreationPropertiesHeaders
	Request shared.ModifyWorkspaceCreationPropertiesRequest `request:"mediaType=application/json"`
}

type ModifyWorkspaceCreationPropertiesResponse struct {
	AccessDeniedException                   *interface{}
	ContentType                             string
	InvalidParameterValuesException         *interface{}
	ModifyWorkspaceCreationPropertiesResult map[string]interface{}
	OperationNotSupportedException          *interface{}
	ResourceNotFoundException               *interface{}
	StatusCode                              int64
}
