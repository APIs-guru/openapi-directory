package operations

import (
	"openapi/pkg/models/shared"
)

type GetContactChannelXAmzTargetEnum string

const (
	GetContactChannelXAmzTargetEnumSsmContactsGetContactChannel GetContactChannelXAmzTargetEnum = "SSMContacts.GetContactChannel"
)

type GetContactChannelHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetContactChannelXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetContactChannelRequest struct {
	Headers GetContactChannelHeaders
	Request shared.GetContactChannelRequest `request:"mediaType=application/json"`
}

type GetContactChannelResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DataEncryptionException   *interface{}
	GetContactChannelResult   *shared.GetContactChannelResult
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
