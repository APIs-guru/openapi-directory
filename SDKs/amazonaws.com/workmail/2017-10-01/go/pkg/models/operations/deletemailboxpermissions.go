package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteMailboxPermissionsXAmzTargetEnum string

const (
	DeleteMailboxPermissionsXAmzTargetEnumWorkMailServiceDeleteMailboxPermissions DeleteMailboxPermissionsXAmzTargetEnum = "WorkMailService.DeleteMailboxPermissions"
)

type DeleteMailboxPermissionsHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteMailboxPermissionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteMailboxPermissionsRequest struct {
	Headers DeleteMailboxPermissionsHeaders
	Request shared.DeleteMailboxPermissionsRequest `request:"mediaType=application/json"`
}

type DeleteMailboxPermissionsResponse struct {
	ContentType                      string
	DeleteMailboxPermissionsResponse map[string]interface{}
	EntityNotFoundException          *interface{}
	EntityStateException             *interface{}
	InvalidParameterException        *interface{}
	OrganizationNotFoundException    *interface{}
	OrganizationStateException       *interface{}
	StatusCode                       int64
}
