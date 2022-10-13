package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateConnectionAliasPermissionXAmzTargetEnum string

const (
	UpdateConnectionAliasPermissionXAmzTargetEnumWorkspacesServiceUpdateConnectionAliasPermission UpdateConnectionAliasPermissionXAmzTargetEnum = "WorkspacesService.UpdateConnectionAliasPermission"
)

type UpdateConnectionAliasPermissionHeaders struct {
	XAmzAlgorithm     *string                                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateConnectionAliasPermissionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateConnectionAliasPermissionRequest struct {
	Headers UpdateConnectionAliasPermissionHeaders
	Request shared.UpdateConnectionAliasPermissionRequest `request:"mediaType=application/json"`
}

type UpdateConnectionAliasPermissionResponse struct {
	AccessDeniedException                 *interface{}
	ContentType                           string
	InvalidParameterValuesException       *interface{}
	InvalidResourceStateException         *interface{}
	OperationNotSupportedException        *interface{}
	ResourceAssociatedException           *interface{}
	ResourceLimitExceededException        *interface{}
	ResourceNotFoundException             *interface{}
	StatusCode                            int64
	UpdateConnectionAliasPermissionResult map[string]interface{}
}
