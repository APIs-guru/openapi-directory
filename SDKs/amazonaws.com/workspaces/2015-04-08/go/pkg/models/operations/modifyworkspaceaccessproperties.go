package operations

import (
	"openapi/pkg/models/shared"
)

type ModifyWorkspaceAccessPropertiesXAmzTargetEnum string

const (
	ModifyWorkspaceAccessPropertiesXAmzTargetEnumWorkspacesServiceModifyWorkspaceAccessProperties ModifyWorkspaceAccessPropertiesXAmzTargetEnum = "WorkspacesService.ModifyWorkspaceAccessProperties"
)

type ModifyWorkspaceAccessPropertiesHeaders struct {
	XAmzAlgorithm     *string                                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ModifyWorkspaceAccessPropertiesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ModifyWorkspaceAccessPropertiesRequest struct {
	Headers ModifyWorkspaceAccessPropertiesHeaders
	Request shared.ModifyWorkspaceAccessPropertiesRequest `request:"mediaType=application/json"`
}

type ModifyWorkspaceAccessPropertiesResponse struct {
	AccessDeniedException                 *interface{}
	ContentType                           string
	ModifyWorkspaceAccessPropertiesResult map[string]interface{}
	ResourceNotFoundException             *interface{}
	StatusCode                            int64
}
