package operations

import (
	"openapi/pkg/models/shared"
)

type ModifySelfservicePermissionsXAmzTargetEnum string

const (
	ModifySelfservicePermissionsXAmzTargetEnumWorkspacesServiceModifySelfservicePermissions ModifySelfservicePermissionsXAmzTargetEnum = "WorkspacesService.ModifySelfservicePermissions"
)

type ModifySelfservicePermissionsHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ModifySelfservicePermissionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ModifySelfservicePermissionsRequest struct {
	Headers ModifySelfservicePermissionsHeaders
	Request shared.ModifySelfservicePermissionsRequest `request:"mediaType=application/json"`
}

type ModifySelfservicePermissionsResponse struct {
	AccessDeniedException              *interface{}
	ContentType                        string
	InvalidParameterValuesException    *interface{}
	ModifySelfservicePermissionsResult map[string]interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
}
