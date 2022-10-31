package operations

import (
	"openapi/pkg/models/shared"
)

type ModifyWorkspaceAccessPropertiesXAmzTargetEnum string

const (
	ModifyWorkspaceAccessPropertiesXAmzTargetEnumWorkspacesServiceModifyWorkspaceAccessProperties ModifyWorkspaceAccessPropertiesXAmzTargetEnum = "WorkspacesService.ModifyWorkspaceAccessProperties"
)

type ModifyWorkspaceAccessPropertiesHeaders struct {
	XAmzAlgorithm     *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ModifyWorkspaceAccessPropertiesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
