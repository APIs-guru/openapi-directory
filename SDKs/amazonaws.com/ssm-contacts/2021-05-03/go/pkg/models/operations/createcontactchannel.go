package operations

import (
	"openapi/pkg/models/shared"
)

type CreateContactChannelXAmzTargetEnum string

const (
	CreateContactChannelXAmzTargetEnumSsmContactsCreateContactChannel CreateContactChannelXAmzTargetEnum = "SSMContacts.CreateContactChannel"
)

type CreateContactChannelHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateContactChannelXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
