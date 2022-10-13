package operations

import (
	"openapi/pkg/models/shared"
)

type GetMailboxDetailsXAmzTargetEnum string

const (
	GetMailboxDetailsXAmzTargetEnumWorkMailServiceGetMailboxDetails GetMailboxDetailsXAmzTargetEnum = "WorkMailService.GetMailboxDetails"
)

type GetMailboxDetailsHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetMailboxDetailsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetMailboxDetailsRequest struct {
	Headers GetMailboxDetailsHeaders
	Request shared.GetMailboxDetailsRequest `request:"mediaType=application/json"`
}

type GetMailboxDetailsResponse struct {
	ContentType                   string
	EntityNotFoundException       *interface{}
	GetMailboxDetailsResponse     *shared.GetMailboxDetailsResponse
	OrganizationNotFoundException *interface{}
	OrganizationStateException    *interface{}
	StatusCode                    int64
}
