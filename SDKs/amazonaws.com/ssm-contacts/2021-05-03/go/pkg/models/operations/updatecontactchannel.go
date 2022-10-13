package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateContactChannelXAmzTargetEnum string

const (
	UpdateContactChannelXAmzTargetEnumSsmContactsUpdateContactChannel UpdateContactChannelXAmzTargetEnum = "SSMContacts.UpdateContactChannel"
)

type UpdateContactChannelHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateContactChannelXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateContactChannelRequest struct {
	Headers UpdateContactChannelHeaders
	Request shared.UpdateContactChannelRequest `request:"mediaType=application/json"`
}

type UpdateContactChannelResponse struct {
	AccessDeniedException      *interface{}
	ConflictException          *interface{}
	ContentType                string
	DataEncryptionException    *interface{}
	InternalServerException    *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ThrottlingException        *interface{}
	UpdateContactChannelResult map[string]interface{}
	ValidationException        *interface{}
}
