package operations

import (
	"openapi/pkg/models/shared"
)

type PutMailboxPermissionsXAmzTargetEnum string

const (
	PutMailboxPermissionsXAmzTargetEnumWorkMailServicePutMailboxPermissions PutMailboxPermissionsXAmzTargetEnum = "WorkMailService.PutMailboxPermissions"
)

type PutMailboxPermissionsHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutMailboxPermissionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutMailboxPermissionsRequest struct {
	Headers PutMailboxPermissionsHeaders
	Request shared.PutMailboxPermissionsRequest `request:"mediaType=application/json"`
}

type PutMailboxPermissionsResponse struct {
	ContentType                   string
	EntityNotFoundException       *interface{}
	EntityStateException          *interface{}
	InvalidParameterException     *interface{}
	OrganizationNotFoundException *interface{}
	OrganizationStateException    *interface{}
	PutMailboxPermissionsResponse map[string]interface{}
	StatusCode                    int64
}
