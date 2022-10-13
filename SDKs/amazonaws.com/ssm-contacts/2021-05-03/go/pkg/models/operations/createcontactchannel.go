package operations

import (
	"openapi/pkg/models/shared"
)

type CreateContactChannelXAmzTargetEnum string

const (
	CreateContactChannelXAmzTargetEnumSsmContactsCreateContactChannel CreateContactChannelXAmzTargetEnum = "SSMContacts.CreateContactChannel"
)

type CreateContactChannelHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateContactChannelXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateContactChannelRequest struct {
	Headers CreateContactChannelHeaders
	Request shared.CreateContactChannelRequest `request:"mediaType=application/json"`
}

type CreateContactChannelResponse struct {
	AccessDeniedException      *interface{}
	ConflictException          *interface{}
	ContentType                string
	CreateContactChannelResult *shared.CreateContactChannelResult
	DataEncryptionException    *interface{}
	InternalServerException    *interface{}
	StatusCode                 int64
	ThrottlingException        *interface{}
	ValidationException        *interface{}
}
